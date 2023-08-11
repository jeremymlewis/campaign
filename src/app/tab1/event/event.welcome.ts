import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../stores/votes.store';

@Component({
  selector: 'app-event-welcome-page',
  templateUrl: 'event.welcome.html',
  styleUrls: ['event.welcome.css']
})
export class EventWelcomePage {
  constructor(private route: Router, private votes: VotesStore) {}

  continue() {
    this.route.navigateByUrl('/tabs/tab1/event');
  }
}
