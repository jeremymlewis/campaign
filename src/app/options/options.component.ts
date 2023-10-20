import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-options-page',
  templateUrl: 'options.component.html',
  styleUrls: ['options.component.css']
})
export class OptionsPage {
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

}
