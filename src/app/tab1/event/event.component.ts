/* eslint-disable max-len */
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/stores/votes.store';
import { Event } from '../../stores/state';
import { ModalToastComponent } from 'src/app/modal-toast/modal-toast.component';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.css']
})
export class EventPage implements OnInit {
  currentEvent: Event;
  allEvents: Event[];
  scandalEvents: Event[];
  gaffeEvents: Event[];
  //neutralizeEvents: Event[];
  boonEvents: Event[];
  endorsementEvents: Event[];
  superPacEvents: Event[];
  mediaTourEvents: Event[];
  hotButtonEvents: Event[];
  endingEvents: Event[];
  currentIndex = 0;
  eventTitle: string;
  eventDescription: string;
  eventHistory: string;
  eventIcon: string;
  eventYear: string;
  eventPersonInvolved: string;
  eventPoints: number;
  statesInvolved: string[];
  statesInvolvedString: string;
  normalFactDisplay: boolean;
  isDemocrat: boolean;
  constructor(private modalCtrl: ModalController, private router: Router, public votes: VotesStore, private toastController: ToastController, public textService: TextService) {}
//TODO3 all this page

  ngOnInit() {
    this.currentIndex = this.votes.round - 2;
    this.isDemocrat = this.votes.isDemocrat;
    this.scandalEvents = this.textService.getScandalEvents();
    this.gaffeEvents = this.textService.getGaffeEvents();
    //this.neutralizeEvents = this.textService.getNeutralizationEvents();
    this.boonEvents = this.textService.getBoonEvents();
    this.endorsementEvents = this.textService.getEndorsementEvents();
    this.hotButtonEvents = this.textService.getHotButtonEvents();
    this.endingEvents = this.textService.getEndingEvents();
    this.mediaTourEvents = this.textService.getMediaTourEvents();
    this.superPacEvents = this.textService.getSuperPacEvents();
    this.currentEvent = this.getCurrentEvent();
    //this.currentEvent = this.allEvents[this.currentIndex];
    //const isDebate = (this.currentIndex === 3 || this.currentIndex === 6 || this.currentIndex === 8);
    // if (this.votes.NationalClimate > 3 && !isDebate) {
    //   if (this.isDemocrat) {
    //     this.currentEvent = this.allEvents[9];
    //   } else {
    //     this.currentEvent = this.allEvents[10];
    //   }
    // } else if (this.votes.NationalClimate < -3 && !isDebate) {
    //   if (this.isDemocrat) {
    //     this.currentEvent = this.allEvents[10];
    //   } else {
    //     this.currentEvent = this.allEvents[9];
    //   }
    // }
    this.eventTitle = this.currentEvent.title;
    this.eventDescription = this.currentEvent.description;
    this.eventHistory = this.currentEvent.history;
    this.eventIcon = this.currentEvent.imageSrc;
    this.eventYear = this.currentEvent.yearInvolved;
    this.eventPersonInvolved = this.currentEvent.politicanInvolved;
    this.eventPoints = this.currentEvent.points;
    this.normalFactDisplay = this.currentEvent.normalFactDisplay;
    this.statesInvolved = this.currentEvent.statesInvolved;
    this.statesInvolvedString = '';
    if (this.statesInvolved.length === 1) {
      this.statesInvolvedString  = ' ' + this.statesInvolved[0];
    } else {
      for (const state of this.statesInvolved) {
        this.statesInvolvedString += ' ';
        this.statesInvolvedString += state;
        this.statesInvolvedString += ',';
      }
      this.statesInvolvedString = this.statesInvolvedString.substring(0, this.statesInvolvedString.length - 1);
      this.statesInvolvedString = this.statesInvolvedString.slice(0, this.statesInvolvedString.length - 3) + ' and' + this.statesInvolvedString.slice(this.statesInvolvedString.length - 3);
    }
    //console.log(this.currentIndex);
    console.log(this.currentEvent);
  }


  getCurrentEvent(): Event {
   // return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    const currentEventType = this.getCurrentEventType();
    console.log(currentEventType);
    if (currentEventType === 'superPac' ) {
      return this.superPacEvents[Math.floor(Math.random() * this.superPacEvents.length)];

      return   {
        title:'Super Pac',
        description:'A super pac ran ads for you in Michigan and Illinois',
        points: 2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: 'a',
        yearInvolved:'a',
        statesInvolved: ['MI', 'IL'],
        choiceEvent: false
      };
    } else if (currentEventType === 'endorsement') {
      return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    } else if (currentEventType === 'boon') {
      return this.boonEvents[Math.floor(Math.random() * this.boonEvents.length)];
    } else if (currentEventType === 'mediaTour') {
      return this.mediaTourEvents[Math.floor(Math.random() * this.mediaTourEvents.length)];
    } else if (currentEventType === 'hotButton') {
      return this.hotButtonEvents[Math.floor(Math.random() * this.hotButtonEvents.length)];
    }  else if (currentEventType === 'gaffe') {
      return this.gaffeEvents[Math.floor(Math.random() * this.gaffeEvents.length)];
    } else if (currentEventType === 'scandal') {
      return this.scandalEvents[Math.floor(Math.random() * this.scandalEvents.length)];
    }
    // else if (currentEventType === 'neutralize') {
    //   return this.neutralizeEvents[Math.floor(Math.random() * this.neutralizeEvents.length)];
    // }
    else {
      return this.allEvents[0];
    }

  }

  getCurrentEventType(): string {
    const score: number = this.votes.getCurrentScore();
    //draw a random number... if more that 50 give a positive event. If less give a negitiave event.
    const draw = Math.floor(Math.random() * 100) + 1;
    //The better a player is doing, give them worse event draw. Worse a player is doing give them a better draw.
    // if (score < 0) {
    //   draw -= Math.ceil(Math.sqrt(Math.abs(score)));
    // } else {
    //   draw += Math.ceil(Math.sqrt(Math.abs(score)));
    // }
    // console.log(draw);
    // draw = draw % 100;
    // if (draw < 0) {
    //   draw *= -1;
    // }
    //Current total 120 lol but not finished TODO jermy
    if (draw > 85) { //10 (even)
      return 'mediaTour'; //1 or 2 no impact... 3/4 +1 to each state. +2 to each state.
    } else  if (draw > 65) { //20 (good)
      return 'endorsement'; //Big national (that they ran ads in a region)
    } else if (draw > 40) { //25 (slight favor to good)
      return 'superPac'; //Gain or lose but only in swing states (anything currently within 3 points)
    } else if (draw > 15) { //25 (slight favor to good)
      return 'hotButton';
      //Specific place, a Bridge collapses and people talk about it... i.e. event draws event to an issue.
      //Free point if you agree, or risk it to see if you lose or not (button to accept or decline) John Kerry
    } else if (draw > 3) { //12 (bad)
      return 'gaffe'; //loose a point, 2, or 3
    } else { //Base 9%
      return 'scandal';     //3 (bad)
    }
  }

  async handleDiceRoll(roll: number) {
    if (roll <= 2) {
      this.handleRollToast(-1, []);
    } else {
      this.handleRollToast(1, []);
    }
  }

  async handleRollToast(roll: number, states: string[]) {

    let statesInvolved = '';
    let toastString = '';
    let toastTitle = '';

    if (states.length === 0) {
      if (roll < 0) {
        toastTitle = 'Bad news...';
        toastString = 'You fall ' + roll +  '% in the polls in every state';
      }  else {
        toastTitle = 'Good News!';
        toastString = 'You gain ' + roll +  '% in the polls in every state';
      }
    }
    else {
      if (states.length === 1) {
        statesInvolved  = ' ' + states[0];
      } else {
        for (const state of states) {
          statesInvolved += ' ';
          statesInvolved += state;
          statesInvolved += ',';
        }
        statesInvolved = statesInvolved.substring(0, statesInvolved.length - 1);
        statesInvolved = statesInvolved.slice(0, statesInvolved.length - 3) + ' and' + statesInvolved.slice(statesInvolved.length - 3);
      }
      if (roll < 0) {
        toastString = 'This moves the Climate ' + (-roll) +  ' points toward your opponent in ' + statesInvolved;
        toastTitle = 'Tough luck...';
      }  else {
        toastTitle = 'Great Choice!';
        toastString = 'This moves the Climate ' + roll +  ' points in your favor in ' + statesInvolved;
      }
    }
    this.handleRoll(roll, states, toastString, toastTitle);
  }



  async handleRoll(roll: number, states: string[], message: string, title?: string) {
    if (states.length === 0) {
      if (this.isDemocrat) {
        this.votes.changeNationalClimate(roll/2, -roll/2);
      } else {
        this.votes.changeNationalClimate(-roll/2, roll/2);
      }
    } else {
      for (const state of states) {
        if (this.isDemocrat) {
          this.votes.changeStateClimate(state,roll/2,-roll/2);
        } else {
          this.votes.changeStateClimate(state,-roll/2,roll/2);
        }
      }
    }
    if (message) {
      this.openModal(message, title);
    } else {
      this.endEvent();
    }
  }

  async openModal(message, title = 'Results') {
    const modal = await this.modalCtrl.create({
      component: ModalToastComponent,
      componentProps: { message, title }
    });

    modal.onDidDismiss().then( () => {
      this.endEvent();
    });

    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }


  endEvent() {
    // this.currentIndex++;
    // if (this.currentIndex < 10) {
    //   this.currentEvent = this.allEvents[this.currentIndex];
    // } else {
    //   this.currentIndex = 0;
    //   this.currentEvent = this.allEvents[this.currentIndex];
    // }
    // const isDebate = (this.currentIndex === 3 || this.currentIndex === 6 || this.currentIndex === 8);
    // if (this.votes.NationalClimate > 3 && !isDebate) {
    //   if (this.isDemocrat) {
    //     this.currentEvent = this.allEvents[9];
    //   } else {
    //     this.currentEvent = this.allEvents[10];
    //   }
    // } else if (this.votes.NationalClimate < -3 && !isDebate) {
    //   if (this.isDemocrat) {
    //     this.currentEvent = this.allEvents[10];
    //   } else {
    //     this.currentEvent = this.allEvents[9];
    //   }
    // }
    // this.eventTitle = this.currentEvent.title;
    // this.eventDescription = this.currentEvent.description;
   // this.eventRollsL = this.currentEvent.rollMapDescription1;
    //this.eventRollsR = this.currentEvent.rollMapDescription2;
    this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
  }
}
