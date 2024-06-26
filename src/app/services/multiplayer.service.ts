import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subscription, startWith } from 'rxjs';
import { VotesStore } from '../data-store/votes.store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MultiPlayerService {
  //Create fromevents here... access them inside of regular components (listen there)
  //there can be one for each type of event

  //connect
  //disconnect
  //settings/party selection
  //move
  //event
  //final

  connectionId: string = "";
  pendingId: string = "";

  createSuccessEvent = this.socket.fromEvent('createSuccess');
  joinSuccessEvent = this.socket.fromEvent('joinSuccess');
  joinFailureEvent = this.socket.fromEvent('joinFailure');
  partySelectEvent = this.socket.fromEvent('partySelect');
  guestMoveEvent = this.socket.fromEvent('guestMove');
  hostMoveEvent = this.socket.fromEvent('hostMove');
  guestSpecialEvent = this.socket.fromEvent('guestSpecial');
  hostSpecialEvent = this.socket.fromEvent('hostSpecial');
  finalEvent = this.socket.fromEvent('final');
  leaveEvent = this.socket.fromEvent('partnerLeft');


  constructor(private socket: Socket, private votes: VotesStore, private route: Router) { }

  ngOnDestroy() {

  }

  createGame() {
    let id = this.gameId();
    this.socket.emit("createGame", id);
    this.connectionId = id;
    this.votes.isHost = true;
    this.votes.isMultiplayer = true;
    return id;
  }

  joinGame(id: string) {
    this.pendingId = id;
    this.votes.isHost = false;
    this.votes.isMultiplayer = true;
    this.socket.emit("joinGame", id);
  }


  handleCreateSuccess(arg1: any) {
    console.log(arg1);
  }

  handleJoinFailure(arg1: any) {
    console.log(arg1)
    console.log(this.pendingId);
    console.log("handle join fail")
    if (this.pendingId && arg1 === this.pendingId) {
      this.route.navigateByUrl('/host-join/fail');//TODO this is not what we want
    }
  }

  handleJoinSuccess(arg1: any) {
    console.log("A join succeeded to " + arg1)
    this.connectionId = arg1;
    if (this.votes.isHost) {
      this.route.navigateByUrl('/options/party');
      this.votes.round = 1;//jermy change test length here
    } else {
      this.pendingId = "";
      this.route.navigateByUrl('/options/party-wait');
      this.votes.round = 1;
    }
    //move to party selection page
  }

  partySelect(selection: any) {
    this.socket.emit("hostPartySelect", this.connectionId, selection);
    this.votes.lastMoveIsEvent = true;
  }

  handlePartySelect(arg: any) {
    if (this.votes.isHost) {
      console.log(arg)
    } else {
      this.votes.isDemocrat = !arg;
      this.route.navigateByUrl('/tabs/tab1');
    }
    //move to tab/tab1 for guest, "Wait screen" for host
  }

  sendHostMove(move: any, states: any[], pollingChange) {
    this.socket.emit("hostMove", this.connectionId, move, states, pollingChange);
  }

  handleHostMove(arg) {
    console.log(arg)
    if (this.votes.isHost) {
      this.route.navigateByUrl('/tabs/tab1/wait-turn');
    } else {
      this.votes.lastMultiPlayerMove = arg;
       //use arg to update store, and prep the opponent screen
      this.route.navigateByUrl('/tabs/tab1/opponent');
    }
  }

  sendGuestMove(move: any, states: any[], pollingChange) {
    this.socket.emit("guestMove", this.connectionId, move, states, pollingChange);
  }

  handleGuestMove(arg) {
    console.log(arg)
    if (this.votes.isHost) {
      this.votes.lastMultiPlayerMove = arg;
      //use arg to update store, and prep the opponent screen
      this.route.navigateByUrl('/tabs/tab1/opponent');
    } else {
      this.route.navigateByUrl('/tabs/tab1/wait-turn');
    }
  }

  sendHostSpecial(special: any, states, roll) {
    this.votes.lastMoveIsEvent = true;
    this.socket.emit("hostSpecial", this.connectionId, special, states, roll);
  }

  handleHostSpecial(arg) {
    console.log(arg)
    if (this.votes.isHost) {
      this.route.navigateByUrl('/tabs/tab1/wait-turn');
    } else {
      this.votes.lastMultiPlayerMove = arg;
      //use arg to update store, and prep the opponent screen
      this.route.navigateByUrl('/tabs/tab1/opponent');
    }
  }

  sendGuestSpecial(special: any, states, roll) {
    this.votes.lastMoveIsEvent = true;
    this.socket.emit("guestSpecial", this.connectionId, special, states, roll);
  }

  handleGuestSpecial(arg) {
    console.log(arg)
    if (this.votes.isHost) {
      this.votes.lastMultiPlayerMove = arg;
      //use arg to update store, and prep the opponent screen
      this.route.navigateByUrl('/tabs/tab1/opponent');
    } else {
      this.route.navigateByUrl('/tabs/tab1/wait-turn');
    }
  }

  sendFinal() {
    this.socket.emit("final", this.connectionId);
  }

  handleFinal(arg: any) {
    console.log(arg)
    this.leave();
    if (this.votes.isHost) {
      this.route.navigateByUrl('/results');
    } else {
      this.route.navigateByUrl('/results');
    }
  }

  leave() {
    this.socket.emit("leave", this.connectionId);
    this.connectionId = "";
  }

  handleLeave(arg: any) {
    this.route.navigateByUrl('/host-join/fail');
  }


  private gameId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < 4; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
