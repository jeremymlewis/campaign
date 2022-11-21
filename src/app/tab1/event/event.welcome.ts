import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../stores/votes.store';

@Component({
  selector: 'app-options-page',
  templateUrl: 'event.welcome.html',
  styleUrls: ['event.component.css']
})
export class EventWelcomePage {
  constructor(private route: Router, private votes: VotesStore) {}

  continue() {
    this.route.navigateByUrl('/tabs/tab1/event');
  }
}
