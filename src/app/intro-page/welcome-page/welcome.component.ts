import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-options-page',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomePage {
  constructor(private route: Router, private votes: VotesStore) {}

  continue() {
    this.route.navigateByUrl('/');
  }
}
