import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../stores/votes.store';
import { State } from 'src/app/stores/state';

@Component({
  selector: 'app-cable-news-page',
  templateUrl: 'cable-news.component.html',
  styleUrls: ['cable-news.component.css']
})
export class CableNewsPage implements OnInit {
  //SETTINGS -- change these to tailor the animation
  tickTime = 100;
  tickCount = 12;
  restTime = 3000;
  statesToDisplay = 8;

  //Displayed
  resultStates: State[] = [];
  allStates: State[] = [];
  mapStates: State[] = [];
  resultMessage = '';
  stateVotes = 3;
  stateName = '';
  stateImg = '/assets/images/states/DC-DC.png';
  leftVal = '28%';
  rightVal = '72%';
  electoralLeft = 0;
  electoralRight = 0;
  scale = 0.3;
  resultsReady = false;
  isDemocrat: boolean;

  constructor(private router: Router, public votes: VotesStore) {}
  //NEWS CHANNEL PAGE (cycles through 10 closest states... plus 10 random)

  ngOnInit() {
    this.isDemocrat = this.votes.isDemocrat;

    this.calculateScaleOfMap();
    this.getResultStates();
    this.runAnimation();
  }

  async getResultStates() {
    this.allStates = this.votes.getSortedStates(51);
    this.resultStates = this.allStates.slice(0, this.statesToDisplay);
    this.mapStates = this.allStates.slice(this.statesToDisplay, 51);
  }

  addStateToMap(state: State) {
    if (state.leansDem > state.leansRep) {
      document.getElementById('cnUS-' + state.abbreviation).style.fill = '#5050FF';
      this.electoralLeft += state.college;
    } else {
      document.getElementById('cnUS-' + state.abbreviation).style.fill = '#ff3030';
      this.electoralRight += state.college;
    }
    document.getElementById('cnredbar').style.width = (this.electoralRight * 75 / 538) + '%';
    document.getElementById('cnbluebar').style.width = (this.electoralLeft * 75 / 538) + '%';
    document.getElementById('cngraybar').style.width = ((538 - (this.electoralRight + this.electoralLeft)) * 75 / 538) + '%';

  }

  calculateScaleOfMap() {
    const w = window.innerWidth;
    this.scale = w * .9 /1150;
    const height = w * 0.6;
    document.getElementById('cnsvg-container').style.height = height + 'px';
  }

  async runAnimation() {
    for (const state of this.mapStates) {
      this.addStateToMap(state);
      await new Promise(f => setTimeout(f, 80));
    }
    document.getElementById('cnresults').style.opacity = '1';
    for (const state of this.resultStates) {
      await this.runSingleStateAnimation(state);
      await new Promise(f => setTimeout(f, this.restTime));
    }
    if (this.router.url === '/results/cable-news') {
      //Hopefully this takes care of the race condition...
      this.router.navigateByUrl('/results/final-map', { replaceUrl: true });
    }
  }

  async runSingleStateAnimation(state: State) {
    document.getElementById('cnstateBox').style.backgroundColor = '#ffffff';
    this.stateImg = '/assets/images/states/' + state.abbreviation + '-' + state.name.replace(/\s+/g, '-') + '.png';
    this.stateName = state.name;
    this.stateVotes = state.college;
    this.resultMessage = '';
    let leftIntVal = 1;
    let rightIntVal = 1;
    this.leftVal = '1%';
    this.rightVal = '1%';
    const trueLeftVal = state.leansRep + 50;
    const trueRightVal = state.leansDem + 50;
    for (let i = 0; i < this.tickCount; i++) {
      leftIntVal += Math.floor(trueLeftVal/this.tickCount);
      rightIntVal += Math.floor(trueRightVal/this.tickCount);
      this.leftVal = leftIntVal.toFixed(1) + '%';
      this.rightVal = rightIntVal.toFixed(1) + '%';
      await new Promise(f => setTimeout(f, this.tickTime));
    }
    this.leftVal = trueLeftVal.toFixed(1) + '%';
    this.rightVal = trueRightVal.toFixed(1) + '%';
    this.addStateToMap(state);
    document.getElementById('cnstateBox').style.backgroundColor = ((this.leftVal < this.rightVal) ? '#a0a0FF' : '#FFa0a0');
    this.resultMessage = state.name + ' voted ' + ((this.leftVal < this.rightVal) ? 'Democrat' : 'Republican');
  }

  skip() {
    this.router.navigateByUrl('/results/final-map');
  }


  mainMenu() {
    this.votes.reset();
    this.router.navigateByUrl('/');
  }
}

