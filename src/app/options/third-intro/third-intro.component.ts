import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AudioService } from '../services/audio.service';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-third-intro-page',
  templateUrl: 'third-intro.component.html',
  styleUrls: ['third-intro.component.css']
})
export class ThirdIntroPage implements AfterViewInit {
  partyName = '';
  constructor(private route: Router, private votes: VotesStore) {}

  ngAfterViewInit() {

  }

  goBack() {
    this.route.navigateByUrl('/options');
  }

  submitName() {
    this.votes.setUserIsThird(true);
    this.votes.setThirdPartyName(this.partyName);
    this.route.navigateByUrl('/tabs');
  }

}
