import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-records-page',
  templateUrl: 'records2.component.html',
  styleUrls: ['records.component.css']
})
export class Records2Page implements OnInit {
  plays: string;
  wins: string;
  demWins: string;
  repWins: string;
  highVotes: string;
  unlockedRecords: any[] = [];
  lockedRecords: any[] = [];

  constructor(private route: Router, private votes: VotesStore) {}


  async ngOnInit() {
    this.plays = await this.votes.getLocalStorage('plays');
    this.wins = await this.votes.getLocalStorage('wins');
    this.demWins = await this.votes.getLocalStorage('demWins');
    this.repWins = await this.votes.getLocalStorage('repWins');
    this.highVotes = await this.votes.getLocalStorage('highVotes');
    //this.setRecords();
  }

  async ionViewWillEnter() {
    this.plays = await this.votes.getLocalStorage('plays');
    this.wins = await this.votes.getLocalStorage('wins');
    this.demWins = await this.votes.getLocalStorage('demWins');
    this.repWins = await this.votes.getLocalStorage('repWins');
    this.highVotes = await this.votes.getLocalStorage('highVotes');
    this.setRecords();
  }

  async setRecords() {
    this.unlockedRecords = [];
    this.lockedRecords = [];
    const records = [
      {title: 'President!', description: 'Win an election', id: 'record1'},
      {title: 'Not the President...', description: 'Lose an election', id: 'record2'},
      {title: 'Party Switch', description: 'Win an election with both parties', id: 'record3'},
      {title: 'Political Dynasty', description: 'Win 10 elections', id: 'record8'},
      {title: 'Time to Retire?', description: 'Lose 10 elections', id: 'record15'},
      {title: 'Close one!', description: 'Win an election with exactly 270 votes', id: 'record11'},

      {title: 'Big Win', description: 'Win with 350 electoral votes', id: 'record25'},
      {title: 'Huge Win', description: 'Win 375 electoral votes', id: 'record26'},

      {title: 'Historic Win!', description: 'Win with more than 400 electoral college votes', id: 'record13'},
      {title: 'Historian', description: 'Play 60 games (the 2024 election will be the 60th in US history!)', id: 'record12'},
      {title: 'Learn the Game', description: 'Read a Campaign Resource in the HELP tab', id: 'record14'},
      {title: 'White House Drop Out', description: 'Drop out of an election early in the HELP tab', id: 'record16'},
      {title: 'Ivory Tower', description: 'Win without visiting a single state', id: 'record4'},
      {title: 'State Resident', description: 'Visit the same state 5 times in a single Classic Mode game', id: 'record9'},
      {title: 'Not Fit For Office', description: 'Draw 2 scandal events in 1 game', id: 'record5'},

      {title: 'Unite the Midwest', description: 'Win all of MN, IA, WI, MI, OH and PA', id: 'record19'},
      {title: 'Unite the Northeast', description: 'Win all of NH, ME, NJ, MA, CT, VT, NY and DE', id: 'record20'},
      {title: 'Unite the Southwest', description: 'Win all of AZ, NV, CO, and NM', id: 'record21'},
      {title: 'Unite the Southeast', description: 'Win all of FL, GA, SC, NC, VA, TN, AL, MS, AR, and LA', id: 'record22'},

      {title: 'Bellweather State?', description: 'Win without Ohio', id: 'record7'},
      {title: 'Don\'t mess with Texas', description: 'Win Texas as a Democrat', id: 'record10'},
      {title: 'Is this possible?', description: 'Win California as a Republican', id: 'record17'},

      //{title: 'Moneybags', description: 'Fundraise over $10 millon', id: 'record23'}, //not ready
      //{title: 'Comeback Kid', description: 'Win after your opponent is projected 320 electoral votes during the game', id: 'record24'}, //not ready

    ];

    //search "checkRecordCompletion" to see where each of these is set

    for (const record of records) {
      const unlocked = await this.votes.getLocalStorage(record.id);
      if (unlocked) {
        this.unlockedRecords.push(record);
      } else {
        this.lockedRecords.push(record);
      }
    }
  }

  continue() {
    this.route.navigateByUrl('/results/final-map');
  }
}
