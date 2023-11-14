import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-gamemode-page',
  templateUrl: 'gamemode.component.html',
  styleUrls: ['gamemode.component.css']
})
export class GameModePage {
  constructor(private route: Router, private votes: VotesStore) {}

  continue(gamemode: string) {
    if (gamemode === 'extra') {
      this.route.navigateByUrl('/options/purchase');
    } else {
      this.route.navigateByUrl('/options/party');
    }
  }

  back() {
    this.route.navigateByUrl('/');
  }
}
