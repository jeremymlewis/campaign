import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-records-page',
  templateUrl: 'records.component.html',
  styleUrls: ['records.component.css']
})
export class RecordsPage implements OnInit {
  plays: string;
  wins: string;
  demWins: string;
  repWins: string;
  highVotes: string;
  constructor(private route: Router, private votes: VotesStore) {}


  async ngOnInit() {
    this.plays = await this.votes.getLocalStorage('plays');
    this.wins = await this.votes.getLocalStorage('wins');
    this.demWins = await this.votes.getLocalStorage('demWins');
    this.repWins = await this.votes.getLocalStorage('repWins');
    this.highVotes = await this.votes.getLocalStorage('highVotes');
  }

  async ionViewWillEnter() {
    this.plays = await this.votes.getLocalStorage('plays');
    this.wins = await this.votes.getLocalStorage('wins');
    this.demWins = await this.votes.getLocalStorage('demWins');
    this.repWins = await this.votes.getLocalStorage('repWins');
    this.highVotes = await this.votes.getLocalStorage('highVotes');

  }

  continue() {
    this.route.navigateByUrl('/');
  }
}
