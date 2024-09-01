import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-gamemode-page',
  templateUrl: 'gamemode.component.html',
  styleUrls: ['gamemode.component.css']
})
export class GameModePage {
  locked = false; //JERMY TEMP VARIABLE FOR LOCKED PURCHASE
  constructor(private route: Router, private votes: VotesStore) {}

  continue(gamemode: string) {
    this.votes.reset();
    if (gamemode === 'extra') {
      this.route.navigateByUrl('/options/purchase');
    } else if (gamemode === 'long') {
      this.votes.setLongGameLength();
      this.route.navigateByUrl('/options/background');
    } else if (gamemode === 'fifty') {
      this.votes.setFiftyFifty();
      this.route.navigateByUrl('/options/background');
    }else if (gamemode === 'random') {
      this.votes.randomizeStates();
      this.route.navigateByUrl('/options/background');
    } else if (gamemode === 'e1916'){
      this.votes.setElectionOf1916();
      this.route.navigateByUrl('/options/historic');
    } else if (gamemode === 'e1976'){
      this.votes.setElectionOf1976();
      this.route.navigateByUrl('/options/historic');
    } else if (gamemode === 'e1876'){
      this.votes.setElectionOf1876();
      this.route.navigateByUrl('/options/historic');
    } else if (gamemode === 'multiplayer') {
      this.route.navigateByUrl('/host-join');
    } else {
      this.route.navigateByUrl('/options/party');
    }
  }

  back() {
    this.route.navigateByUrl('/');
  }
}
