import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { AudioService } from '../services/audio.service';
import { State } from '../stores/State';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, AfterViewInit {
  isDemocrat = true;
  isThird = false;
  partyName= '';
  decidedStates: State[] = [];
  safeStates: State[] = [];
  safeStatesRight: State[] = [];
  safeStatesLeft: State[] = [];
  decidedStatesRight: State[]= [];
  decidedStatesLeft: State[]= [];
  rightLeanStates: State[]= [];
  leftLeanStates: State[]= [];
  tossUpStatesLeft: State[]= [];
  tossUpStatesRight: State[]= [];
  tossUpStates: State[]= [];
  allStates: State[]= [];
  decidedRed = 0;
  decidedBlue = 0;
  safeRed = 0;
  safeBlue = 0;
  leanRed = 0;
  leanBlue = 0;
  tossUp = 0;
  pink = 0;
  sky = 0;
  national = 0;
  bluered = true;
  showFinal = false;
  showVotes = false;
  scale = 0.3;

  constructor(public store: VotesStore, private router: Router, private audio: AudioService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/tabs/tab2') {
          this.updateStateLists();
        }
      }
    });
  }

  ngOnInit(): void {
    this.isDemocrat = this.store.getUserIsDem();
    this.isThird = this.store.getUserIsThird();
    this.partyName = this.store.thirdPartyName;
    this.calculateScaleOfMap();
  }

  ngAfterViewInit() {
    this.audio.preload('america', 'assets/audio/america.mp3');
    this.updateStateLists();
  }


  calculateScaleOfMap() {
    const w = window.innerWidth;
    this.scale = w * .9 /1150;
    const height = w * 0.6;
    document.getElementById('svg-container').style.height = height + 'px';
  }


  updateL() {
    this.audio.play('america');
    // this.store.changeNationalClimate(5, 0);
    // this.national = this.store.NationalClimate;
    this.national = this.store.NationalClimate;
    this.updateStateLists();
  }

  updateStateLists() {
    this.decidedStates = [];
    this.decidedStatesRight = [];
    this.decidedStatesLeft = [];
    this.safeStatesRight = [];
    this.safeStatesLeft = [];
    this.rightLeanStates = [];
    this.leftLeanStates = [];
    this.tossUpStatesLeft = [];
    this.tossUpStatesRight = [];
    this.tossUpStates = [];
    this.allStates = [];
    this.safeBlue = 0;
    this.safeRed = 0;
    this.decidedRed = 0;
    this.decidedBlue = 0;
    this.leanRed = 0;
    this.leanBlue= 0;
    this.tossUp = 0;
    this.sky = 0;
    this.pink = 0;
    this.allStates = this.store.getAllStates();
    this.decidedStates = this.store.getDecidedStates();
    this.national = this.store.NationalClimate;
    for (const state of this.decidedStates) {
      if (state.leansDem > 0) {
        this.decidedStatesLeft.push(state);
        document.getElementById('US-' + state.abbreviation).style.fill = 'blue';
        this.decidedBlue += state.college;
      } else {
        this.decidedStatesRight.push(state);
        document.getElementById('US-' + state.abbreviation).style.fill = 'red';
        this.decidedRed += state.college;
      }
    }
    this.safeStates = this.store.getSafeStates();

    for (const state of this.safeStates) {
      if (state.leansDem > 0) {
        this.safeStatesLeft.push(state);
        document.getElementById('US-' + state.abbreviation).style.fill = '#5050FF';
        this.safeBlue += state.college;
      } else {
        this.safeStatesRight.push(state);
        document.getElementById('US-' + state.abbreviation).style.fill = '#ff3030';
        this.safeRed += state.college;
      }
    }
    this.leftLeanStates = this.store.getLeftLeanStates();
    for (const state of this.leftLeanStates) {
      document.getElementById('US-' + state.abbreviation).style.fill = '#7070FF';
      this.leanBlue += state.college;
    }
    this.rightLeanStates = this.store.getRightLeanStates();
    for (const state of this.rightLeanStates) {
      document.getElementById('US-' + state.abbreviation).style.fill = '#ff7070';
      this.leanRed += state.college;
    }
    this.tossUpStatesLeft = this.store.getTossUpsLeft();
    this.tossUpStates = this.store.getTossUps();
    this.tossUpStatesRight = this.store.getTossUpsRight();
    for (const state of this.tossUpStatesRight) {
      document.getElementById('US-' + state.abbreviation).style.fill = '#ffc0c0';
      this.pink += state.college;
      //this.tossUp += state.college;
    }
    for (const state of this.tossUpStatesLeft) {
      document.getElementById('US-' + state.abbreviation).style.fill = '#c0c0ff';
      this.sky += state.college;
     // this.tossUp += state.college;
    }
    for (const state of this.tossUpStates) {
      document.getElementById('US-' + state.abbreviation).style.fill = '#ffffe0';
      this.tossUp += state.college;
    }
    document.getElementById('redbar').style.width = (this.safeRed * 75 / 538) + '%';
    document.getElementById('bluebar').style.width = (this.safeBlue * 75 / 538) + '%';
    document.getElementById('lightredbar').style.width = (this.leanRed * 75 / 538) + '%';
    document.getElementById('lightbluebar').style.width = (this.leanBlue * 75 / 538) + '%';
    document.getElementById('pinkbar').style.width = (this.pink * 75 / 538) + '%';
    document.getElementById('skybar').style.width = (this.sky * 75 / 538) + '%';
    document.getElementById('graybar').style.width = ((this.tossUp - this.sky - this.pink) * 75 / 538) + '%';

    //AFTER DECIDED CHANGE TO THIS? maybe
    //document.getElementById('redbar').style.width = (this.decidedRed * 75 / 538) + '%';
    //document.getElementById('bluebar').style.width = (this.decidedBlue * 75 / 538) + '%';
  }

  toggleView() {
    this.showVotes = !this.showVotes;
  }


}
