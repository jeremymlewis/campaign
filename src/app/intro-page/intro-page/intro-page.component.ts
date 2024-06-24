import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AudioService } from '../services/audio.service';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-intro-page',
  templateUrl: 'intro-page.component.html',
  styleUrls: ['intro-page.component.scss']
})
export class IntroPage implements AfterViewInit {
  passwordRequired = false;
  passcode = '';
  constructor(private route: Router, public votes: VotesStore) {}

  ngAfterViewInit() {
   // this.audio.preload('chief', 'assets/audio/chief.mp3');
  }

  toTutorial() {
    this.route.navigateByUrl('/welcome'); //TODO was selcome but I changed it
  }

  toHostJoin() {
    this.route.navigateByUrl('/host-join'); //TODO was selcome but I changed it
  }

  toTabs() {
    this.route.navigateByUrl('/options'); //TODO was selcome but I changed it
    this.votes.round = 1;
  }

  toTabsTestEnd() {
    this.route.navigateByUrl('/options');
    this.votes.round = 15;
  }

  toAchievements() {
    this.route.navigateByUrl('/records');
  }

}
