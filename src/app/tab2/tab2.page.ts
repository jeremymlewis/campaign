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
  decidedStates: State[] = [];
  decidedStatesRight: State[]= [];
  decidedStatesLeft: State[]= [];
  rightLeanStates: State[]= [];
  leftLeanStates: State[]= [];
  tossUpStatesLeft: State[]= [];
  tossUpStatesRight: State[]= [];
  tossUpStates: State[]= [];
  decidedRed = 0;
  decidedBlue = 0;
  leanRed = 0;
  leanBlue = 0;
  tossUp = 0;
  pink = 0;
  sky = 0;
  national = 0;
  bluered = true;

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
  }

  ngAfterViewInit() {
    this.audio.preload('america', 'assets/audio/america.mp3');
    this.updateStateLists();
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
    this.rightLeanStates = [];
    this.leftLeanStates = [];
    this.tossUpStatesLeft = [];
    this.tossUpStatesRight = [];
    this.tossUpStates = [];
    this.decidedRed = 0;
    this.decidedBlue = 0;
    this.leanRed = 0;
    this.leanBlue= 0;
    this.tossUp = 0;
    this.sky = 0;
    this.pink = 0;
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
    this.leftLeanStates = this.store.getLeftLeanStates();
    for (const state of this.leftLeanStates) {
      document.getElementById('US-' + state.abbreviation).style.fill = '#0096FF';
      this.leanBlue += state.college;
    }
    this.rightLeanStates = this.store.getRightLeanStates();
    for (const state of this.rightLeanStates) {
      document.getElementById('US-' + state.abbreviation).style.fill = '#eb706e';
      this.leanRed += state.college;
    }
    this.tossUpStatesLeft = this.store.getTossUpsLeft();
    this.tossUpStates = this.store.getTossUps();
    this.tossUpStatesRight = this.store.getTossUpsRight();
    for (const state of this.tossUpStatesRight) {
      document.getElementById('US-' + state.abbreviation).style.fill = 'pink';
      this.pink += state.college;
      this.tossUp += state.college;
    }
    for (const state of this.tossUpStatesLeft) {
      document.getElementById('US-' + state.abbreviation).style.fill = 'lightblue';
      this.sky += state.college;
      this.tossUp += state.college;
    }
    for (const state of this.tossUpStates) {
      document.getElementById('US-' + state.abbreviation).style.fill = '#ffffe0';
      this.tossUp += state.college;
    }
    document.getElementById('redbar').style.width = (this.decidedRed * 75 / 538) + '%';
    document.getElementById('bluebar').style.width = (this.decidedBlue * 75 / 538) + '%';
    document.getElementById('lightredbar').style.width = (this.leanRed * 75 / 538) + '%';
    document.getElementById('lightbluebar').style.width = (this.leanBlue * 75 / 538) + '%';
    document.getElementById('pinkbar').style.width = (this.pink * 75 / 538) + '%';
    document.getElementById('skybar').style.width = (this.sky * 75 / 538) + '%';
    document.getElementById('graybar').style.width = ((this.tossUp - this.sky - this.pink) * 75 / 538) + '%';

  }

}
