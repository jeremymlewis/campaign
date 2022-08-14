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

  continue(isDem: boolean) {
      this.votes.setUserIsDem(isDem);
      this.route.navigateByUrl('/tabs');
  }

}
