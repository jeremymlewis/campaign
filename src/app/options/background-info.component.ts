import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../services/audio.service';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-background-info-page',
  templateUrl: 'background-info.component.html',
  styleUrls: ['background-info.component.css']
})
export class BackgroundInfoPage implements AfterViewInit {
  partyName = '';
  constructor(private route: Router, private votes: VotesStore) {}

  ngAfterViewInit() {

  }

  goBack() {
    this.route.navigateByUrl('/options');
  }

  submitBackground() {
    this.votes.setBackground('');
    //this.votes.setUserIsThird(true);
    //this.votes.setThirdPartyName(this.partyName);
    this.route.navigateByUrl('/tabs');
  }

}
