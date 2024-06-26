import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../data-store/votes.store';
import { MultiPlayerService } from 'src/app/services/multiplayer.service';

@Component({
  selector: 'app-partyselect-page',
  templateUrl: 'partyselect.component.html',
  styleUrls: ['partyselect.component.css']
})
export class PartySelectPage {
  constructor(private route: Router, private multiplayer: MultiPlayerService, public votes: VotesStore) {}

  continue(party: string) {
      let isDemocrat = false;
      if (party === 'dem') {
        isDemocrat = true;
      }
      this.votes.setUserIsDem(isDemocrat);
      if (this.votes.isMultiplayer) {
        this.multiplayer.partySelect(isDemocrat);
        this.route.navigateByUrl('/tabs/tab1/wait-turn');
      } else {
        this.route.navigateByUrl('/tabs');
      }
  }

  back() {
    this.route.navigateByUrl('/options');
  }
}
