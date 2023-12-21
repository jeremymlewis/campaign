import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-historic',
  templateUrl: 'historic-info.component.html',
  styleUrls: ['historic-info.component.css']
})
export class HistoricInfoPage {
  constructor(private router: Router, public votes: VotesStore) {}

  continue() {
    this.router.navigateByUrl('/options/party');
  }

}
