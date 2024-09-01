import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-background-c',
  templateUrl: 'background-info.component.html',
  styleUrls: ['background-info.component.css']
})
export class BackgroundInfoPage {
  constructor(private router: Router, public votes: VotesStore) {}

  continue() {
    this.router.navigateByUrl('/options/party');
  }

  back() {
    this.router.navigateByUrl('/options');
  }

}
