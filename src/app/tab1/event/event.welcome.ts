import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-event-welcome-page',
  templateUrl: 'event.welcome.html',
  styleUrls: ['event.welcome.css']
})
export class EventWelcomePage implements OnInit {
  imgSrc = 'Deck1';
  imgSrcs: string[] = [
    'Deck1',
    'Deck2',
    'Deck3',
    'Deck4',
    'Deck5',
    'Deck6',
    'Deck7',
    'Deck8',
    'Deck9',
    'Deck10',
    'Deck11',
    'Deck12',
    'Deck13',
    'Deck14',
    'Deck15',
    'Deck16',
    'Deck17'
  ];
  constructor(private route: Router, private votes: VotesStore) {}

  ngOnInit() {
    this.cycleCards();
  }

  async cycleCards() {
    for (const im of this.imgSrcs) {
      this.imgSrc = im;
      await new Promise(f => setTimeout(f, 130));
    }
    for (const im of this.imgSrcs) {
      this.imgSrc = im;
      await new Promise(f => setTimeout(f, 130));
    }
    for (const im of this.imgSrcs) {
      this.imgSrc = im;
      await new Promise(f => setTimeout(f, 130));
    }
    for (const im of this.imgSrcs) {
      this.imgSrc = im;
      await new Promise(f => setTimeout(f, 130));
    }
    for (const im of this.imgSrcs) {
      this.imgSrc = im;
      await new Promise(f => setTimeout(f, 130));
    }
    for (const im of this.imgSrcs) {
      this.imgSrc = im;
      await new Promise(f => setTimeout(f, 130));
    }
  }

  continue() {
    this.route.navigateByUrl('/tabs/tab1/event');
  }
}
