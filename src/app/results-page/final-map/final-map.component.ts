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
    }
    document.getElementById('fredbar').style.width = (this.electoralRight * 75 / 538) + '%';
    document.getElementById('fbluebar').style.width = (this.electoralLeft * 75 / 538) + '%';
    document.getElementById('fgraybar').style.width = ((538 - (this.electoralRight + this.electoralLeft)) * 75 / 538) + '%';
  }

  calculateScaleOfMap() {
    const w = window.innerWidth;
    this.scale = w * .9 /1150;
    const height = w * 0.6;
    document.getElementById('fsvg-container').style.height = height + 'px';
  }


  mainMenu() {
    if (window.confirm('Finished with current game?')) {
      this.votes.reset();
      this.router.navigateByUrl('/');
    }
  }
}

