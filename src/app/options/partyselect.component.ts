import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-partyselect-page',
  templateUrl: 'partyselect.component.html',
  styleUrls: ['partyselect.component.css']
})
export class PartySelectPage {
  constructor(private route: Router, private votes: VotesStore) {}

  continue(party: string) {
      let isDemocrat = false;
      if (party === 'dem') {
        isDemocrat = true;
      }
      this.votes.setUserIsDem(isDemocrat);
      if (party === 'three') {
        this.votes.setUserIsThird(true);
        this.route.navigateByUrl('/options/third');
      } else {
        this.route.navigateByUrl('/tabs');
        // this.route.navigateByUrl('/options/background');JERMY add options here
      }
  }

  back() {
    this.route.navigateByUrl('/options');
  }
}
