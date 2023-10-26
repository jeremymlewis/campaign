import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../stores/votes.store';

@Component({
  selector: 'app-election-day-page',
  templateUrl: 'election-day.component.html',
  styleUrls: ['election-day.component.css']
})
export class ElectionDayPage implements OnInit {
  isDemocrat: boolean;

  constructor(private router: Router, public votes: VotesStore) {}
  //ELECTION DAY PAGE (announce that campaigning is over... display "HOT TOPICS" on voters minds [these could be the tie breakers])

  ngOnInit() {
    this.isDemocrat = this.votes.isDemocrat;

    this.votes.finalizeVotes();

  }

  cableNews() {
    this.router.navigateByUrl('/results/cable-news');
  }
}

