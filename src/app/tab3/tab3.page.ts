import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../data-store/votes.store';
import { MultiPlayerService } from '../services/multiplayer.service';
import { MobileAdsService } from '../services/admob.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  isDemocrat: boolean;
  isThird: boolean;
  partyName = '';
  slot0 = [1,2];
  slot1 = [3];
  slot2 = [4];
  slot3 = [5,6];
  constructor(private votes: VotesStore, private router: Router, private multiplayer: MultiPlayerService, private mobileAds: MobileAdsService) {}

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
    this.isThird = this.votes.getUserIsThird();
    this.partyName = this.votes.thirdPartyName;
  }

  ionViewWillEnter(){
    this.isDemocrat = this.votes.isDemocrat;
  }

  learnTheGameAcheievment() {
    this.votes.unlockRecord('record14');
    //give them the Learn The Game acheivement here
  }

  dropOutAcheievment() {
    this.votes.unlockRecord('record16');
    //give them the Dropout acheivement here
  }



  campaign() {
    this.learnTheGameAcheievment();
    this.router.navigateByUrl('tabs/tab3/campaign');

  }

  turn() {
    this.learnTheGameAcheievment();

    this.router.navigateByUrl('tabs/tab3/turn');

  }

  fundraise() {
    this.learnTheGameAcheievment();

    this.router.navigateByUrl('tabs/tab3/fundraise');

  }

  debate() {
    this.learnTheGameAcheievment();

    this.router.navigateByUrl('tabs/tab3/debate');
  }

  event() {
    this.learnTheGameAcheievment();

    this.router.navigateByUrl('tabs/tab3/event');

  }

  advertise() {
    this.learnTheGameAcheievment();

    this.router.navigateByUrl('tabs/tab3/advertise');
  }

  reset() {
    if (window.confirm('Do you want to drop out of the race? All progress will be lost')) {
      this.dropOutAcheievment();
      if (this.votes.isMultiplayer) {
        this.multiplayer.leave();
      }
      this.mobileAds.interstitial();
      // this.router.navigateByUrl('/');
    }
  }
}
