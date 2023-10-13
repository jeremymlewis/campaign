import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  actionPending = false;
  // progressMessage = '';
  // progress = 1;
  constructor(private router: Router, public votes: VotesStore) {}

  // actionStart() {
  //   this.actionPending = true;
  // }

  // actionEnd() {
  //   this.actionPending = false;
  // }

  isTab1(): boolean {
    if (this.router.url.includes('tab1')) {
      return true;
    } else {
      return false;
    }
  }

}
