import { Component, OnInit } from '@angular/core';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  isDemocrat: boolean;
  constructor(private votes: VotesStore) {}

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
  }
}
