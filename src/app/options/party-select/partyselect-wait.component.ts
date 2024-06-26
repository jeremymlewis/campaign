import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-partyselect-wait-page',
  templateUrl: 'partyselect-wait.component.html',
  styleUrls: ['partyselect.component.css']
})
export class PartySelectWaitPage {
  constructor(private route: Router, private votes: VotesStore) {}


}
