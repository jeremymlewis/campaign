import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../stores/votes.store';
import { State } from 'src/app/stores/state';

@Component({
  selector: 'app-final-map-page',
  templateUrl: 'final-map.component.html',
  styleUrls: ['final-map.component.css']
})
export class FinalMapPage implements OnInit, AfterViewInit {
  win = false;
  scale = 0.3;
  allStates: State[] = [];
  electoralLeft = 0;
  electoralRight = 0;
  popularLeft = 0;
  popularRight = 0;
  popularLeftString = '';
  popularRightString = '';
  isDemocrat: boolean;

  constructor(private router: Router, public votes: VotesStore) {}
  //FINAL MAP PAGE (each state has its own row with 49% - 51% display)

  ngOnInit() {
    this.isDemocrat = this.votes.isDemocrat;
    this.win = this.votes.getUserWon();
    this.calculateScaleOfMap();
    // if (this.votes.isDemocrat) {
    //   this.votes.addGameStats(this.win,true,this.votes.getFinalBlue());
    // } else {
    //   this.votes.addGameStats(this.win,false,this.votes.getFinalRed());
    // }
  }

  ngAfterViewInit() {
    this.colorMap();
  }

  colorMap() {
    this.allStates = this.votes.getAllStates();
    for (const state of this.allStates) {
      if (state.leansDem > state.leansRep) {
        document.getElementById('fUS-' + state.abbreviation).style.fill = '#5050FF';
        this.electoralLeft += state.college;
      } else {
        document.getElementById('fUS-' + state.abbreviation).style.fill = '#ff3030';
        this.electoralRight += state.college;
      }
      const trueLeftVal = state.leansDem/2 + 50;
      const trueRightVal = state.leansRep/2 + 50;

      this.popularLeft += (264000 + Math.floor(Math.random() * 12000)) * state.college * trueLeftVal/100;
      this.popularRight += (264000 + Math.floor(Math.random() * 12000)) * state.college * trueRightVal/100;
    }
    this.popularLeftString = Math.floor(this.popularLeft).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.popularRightString = Math.floor(this.popularRight).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    document.getElementById('fredbar').style.width = (this.electoralRight * 75 / (this.votes.neededToWin*2-2)) + '%';
    document.getElementById('fbluebar').style.width = (this.electoralLeft * 75 / (this.votes.neededToWin*2-2)) + '%';
  }

  calculateScaleOfMap() {
    const w = window.innerWidth;
    this.scale = w * .9 /1150;
    const height = w * 0.6;
    document.getElementById('fsvg-container').style.height = height + 'px';
  }


  mainMenu() {
    if (window.confirm('Finished with current game?')) {
      this.router.navigateByUrl('/');
    }
  }

  records() {
    this.router.navigateByUrl('/records2');
  }
}

