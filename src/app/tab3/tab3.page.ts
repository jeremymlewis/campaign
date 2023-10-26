import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../stores/votes.store';

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
  constructor(private votes: VotesStore, private router: Router) {}

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
    this.isThird = this.votes.getUserIsThird();
    this.partyName = this.votes.thirdPartyName;
  }

  ionViewWillEnter(){
    this.isDemocrat = this.votes.isDemocrat;
  }


  campaign() {
    this.router.navigateByUrl('tabs/tab3/campaign');

  }

  turn() {
    this.router.navigateByUrl('tabs/tab3/turn');

  }

  fundraise() {
    this.router.navigateByUrl('tabs/tab3/fundraise');

  }

  debate() {
    this.router.navigateByUrl('tabs/tab3/debate');
  }

  event() {
    this.router.navigateByUrl('tabs/tab3/event');

  }

  advertise() {
    this.router.navigateByUrl('tabs/tab3/advertise');
  }

  reset() {
    if (window.confirm('Do you want to drop out of the race? All progress will be lost')) {
      this.votes.reset();
      this.router.navigateByUrl('/');
    }
  }
}
