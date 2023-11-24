import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-gamemode-page',
  templateUrl: 'gamemode.component.html',
  styleUrls: ['gamemode.component.css']
})
export class GameModePage {
  locked = false; //JERMY TEMP VARIABLE FOR LOCKED PURCHASE
  constructor(private route: Router, private votes: VotesStore) {}

  continue(gamemode: string) {
    if (gamemode === 'extra') {
      this.route.navigateByUrl('/options/purchase');
    } else if (gamemode === 'long') {
      this.votes.setLongGameLength();
      this.route.navigateByUrl('/options/party');
    } else if (gamemode === 'random') {
      this.votes.randomizeStates();
      this.route.navigateByUrl('/options/party');
    } else if (gamemode === 'e1916'){
      this.votes.setElectionOf1916();
      this.route.navigateByUrl('/options/historic');
    } else {
      this.votes.reset();
      this.route.navigateByUrl('/options/party');
    }
  }

  back() {
    this.route.navigateByUrl('/');
  }
}
