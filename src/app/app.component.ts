import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from './data-store/votes.store';
import { MultiPlayerService } from './services/multiplayer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private _createSuccessSub: Subscription;
  private _joinSuccessSub: Subscription;
  private _joinFailureSub: Subscription;
  private _partySelectSub: Subscription;
  private _guestMoveSub: Subscription;
  private _hostMoveSub: Subscription;
  private _guestSpecialSub: Subscription;
  private _hostSpecialSub: Subscription;
  private _finalSub: Subscription;
  private _leaveSub: Subscription;


  //Listeners for all of the multiplayer events

  constructor(private route: Router, private store: VotesStore, private multiplayer: MultiPlayerService) {}


  ngOnInit() {
    this._createSuccessSub = this.multiplayer.createSuccessEvent.subscribe(arg => this.multiplayer.handleCreateSuccess(arg));
    this._joinSuccessSub = this.multiplayer.joinSuccessEvent.subscribe(arg => this.multiplayer.handleJoinSuccess(arg));
    this._joinFailureSub = this.multiplayer.joinFailureEvent.subscribe(arg => this.multiplayer.handleJoinFailure(arg));
    this._partySelectSub = this.multiplayer.partySelectEvent.subscribe(arg => this.multiplayer.handlePartySelect(arg));
    this._guestMoveSub = this.multiplayer.guestMoveEvent.subscribe(arg => this.multiplayer.handleGuestMove(arg));
    this._hostMoveSub = this.multiplayer.hostMoveEvent.subscribe(arg => this.multiplayer.handleHostMove(arg));
    this._guestSpecialSub = this.multiplayer.guestSpecialEvent.subscribe(arg => this.multiplayer.handleGuestSpecial(arg));
    this._hostSpecialSub = this.multiplayer.hostSpecialEvent.subscribe(arg => this.multiplayer.handleHostSpecial(arg));
    this._finalSub = this.multiplayer.finalEvent.subscribe(arg => this.multiplayer.handleFinal(arg));
    this._leaveSub = this.multiplayer.leaveEvent.subscribe(arg => this.multiplayer.handleLeave(arg));
  }

  ngOnDestroy() {
    this._createSuccessSub.unsubscribe();
    this._joinSuccessSub.unsubscribe();
    this._joinFailureSub.unsubscribe();
    this._partySelectSub.unsubscribe();
    this._guestMoveSub.unsubscribe();
    this._hostMoveSub.unsubscribe();
    this._guestSpecialSub.unsubscribe();
    this._hostSpecialSub.unsubscribe();
    this._finalSub.unsubscribe();
    this._leaveSub.unsubscribe();
  }

  //navigation based off of multiplayer events...


  moveToTab() {

    this.store.changeNationalClimate(-1,1);
    // this.route.navigateByUrl('/options'); //TODO was selcome but I changed it
  }

}
