import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../services/audio.service';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-results-page',
  templateUrl: 'results-page.component.html',
  styleUrls: ['results-page.component.css']
})
export class ResultsPage implements OnInit {
  isDemocrat: boolean;
  constructor(private router: Router, public votes: VotesStore) {}

  ngOnInit() {
    this.checkRecordCompletion();
  }

  checkRecordCompletion() {
    if (this.votes.isDemocrat) {
      this.isDemocrat = true;
      this.votes.addGameStats(this.votes.getUserWon(),true,this.votes.getFinalBlue());
    } else {
      this.isDemocrat = false;
      this.votes.addGameStats(this.votes.getUserWon(),false,this.votes.getFinalRed());
    }
    //should we update the wins/losses acheivements here or in this.votes.addGameStats? idk
    //game mode acheivements here too?
  }

  map() {
    this.router.navigateByUrl('/results/final-map');
  }

  day() {
    this.router.navigateByUrl('/results/election-day');
  }

  news() {
    this.router.navigateByUrl('/results/cable-news');
  }

  mainMenu() {
    this.votes.reset();
    this.router.navigateByUrl('/');
  }
}

