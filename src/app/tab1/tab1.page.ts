import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route: Router) {}

  round: number = 1;
  text: string = '';

  fundraise() {
    this.route.navigateByUrl('tabs/tab1/fundraise');
  }

  campaign() {
    this.route.navigateByUrl('tabs/tab1/campaign');
  }

  advertising() {
    this.route.navigateByUrl('tabs/tab1/advertise');
  }

  event() {
    this.route.navigateByUrl('tabs/tab1/event');

  }

  turn() {
    this.round++;
    if (this.round > 10) {
      this.round = 0;
      this.text = 'game over! YOU WON THE ELECTION!'
    }
  }
}
