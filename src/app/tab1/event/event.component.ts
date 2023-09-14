/* eslint-disable max-len */
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/stores/votes.store';
import { Event } from '../../stores/state';

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
  neutralizeEvents: Event[];
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
  normalEvent: boolean;
  isDemocrat: boolean;
  constructor(private router: Router, public votes: VotesStore, private toastController: ToastController, public textService: TextService) {}
//TODO3 all this page

  ngOnInit() {
    this.currentIndex = this.votes.round - 2;
    this.isDemocrat = this.votes.isDemocrat;
    this.allEvents = this.textService.getEvents();
    this.scandalEvents = this.textService.getScandalEvents();
    this.gaffeEvents = this.textService.getGaffeEvents();
    this.neutralizeEvents = this.textService.getNeutralizationEvents();
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
    this.normalEvent = this.currentEvent.normalEvent;
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
      return this.superPacEvents[Math.floor(Math.random() * this.endorsementEvents.length)];

      return   {
        title:'Super Pac/Donation',
        description:'A super pac ran ads for you in Michigan and Illinois',
        points: 2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalEvent: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: 'a',
        yearInvolved:'a',
        statesInvolved: ['MI', 'IL']
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
    } else if (currentEventType === 'neutralize') {
      return this.neutralizeEvents[Math.floor(Math.random() * this.neutralizeEvents.length)];
    } else {
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
    if (draw > 94) {        // 6 (even)
      return 'neutralize';
    } else if (draw > 85) { //10 (even)
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

  async handleRoll(roll: number, states: string[]) {
    if (roll === 0 && this.currentEvent.title === 'Neutralization') {
      this.votes.neutralizeStateClimate(states[0]);
    } else if (states.length === 0) {
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
    // if (roll === 1) {
    //   if (this.currentEvent.rollMap[0] > 0 && this.isDemocrat ) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[0]/2, -this.currentEvent.rollMap[0]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[0] + ' to the left', 2000);
    //   } else if (this.currentEvent.rollMap[0] < 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[0]/2, -this.currentEvent.rollMap[0]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[0] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[0] > 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[0]/2, this.currentEvent.rollMap[0]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[0] + ' to the right', 2000);
    //   }
    //   if (this.currentEvent.rollMap[0] < 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[0]/2, this.currentEvent.rollMap[0]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[0] + ' to the left', 2000);
    //   }
    // }
    // if (roll === 2) {
    //   if (this.currentEvent.rollMap[1] > 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[1]/2, -this.currentEvent.rollMap[1]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[1] + ' to the left', 2000);
    //   } else if (this.currentEvent.rollMap[1] > 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[1]/2, this.currentEvent.rollMap[1]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[1] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[1] < 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[1]/2, -this.currentEvent.rollMap[1]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[1] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[1] < 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[1]/2, this.currentEvent.rollMap[1]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[1] + ' to the left', 2000);
    //   }
    // }
    // if (roll === 3) {
    //   if (this.currentEvent.rollMap[2] > 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[2]/2, -this.currentEvent.rollMap[2]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[2] + ' to the left', 2000);
    //   } else if (this.currentEvent.rollMap[2] > 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[2]/2, this.currentEvent.rollMap[2]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[2] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[2] < 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[2]/2, -this.currentEvent.rollMap[2]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[2] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[2] < 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[2]/2, this.currentEvent.rollMap[2]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[2] + ' to the left', 2000);
    //   }
    // }
    // if (roll === 4) {
    //   if (this.currentEvent.rollMap[3] > 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[3]/2, -this.currentEvent.rollMap[3]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[3] + ' to the left', 2000);
    //   } else if (this.currentEvent.rollMap[3] > 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[3]/2, this.currentEvent.rollMap[3]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[3] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[3] < 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[3]/2, -this.currentEvent.rollMap[3]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[3] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[3] < 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[3]/2, this.currentEvent.rollMap[3]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[3] + ' to the left', 2000);
    //   }
    // }
    // if (roll === 5) {
    //   if (this.currentEvent.rollMap[4] > 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[4]/2, -this.currentEvent.rollMap[4]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[4] + ' to the left', 2000);
    //   } else if (this.currentEvent.rollMap[4] > 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[4]/2, this.currentEvent.rollMap[4]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[4] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[4] < 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[4]/2, -this.currentEvent.rollMap[4]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[4] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[4] < 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[4]/2, this.currentEvent.rollMap[4]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[4] + ' to the left', 2000);
    //   }
    // }
    // if (roll === 6) {
    //   if (this.currentEvent.rollMap[5] > 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[5]/2, -this.currentEvent.rollMap[5]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[5] + ' to the left', 2000);
    //   } else if (this.currentEvent.rollMap[5] > 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[5]/2, this.currentEvent.rollMap[5]/2);
    //     this.presentToast('National Climate moved ' + this.currentEvent.rollMap[5] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[5] < 0 && this.isDemocrat) {
    //     this.votes.changeNationalClimate(this.currentEvent.rollMap[5]/2, -this.currentEvent.rollMap[5]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[5] + ' to the right', 2000);
    //   } else if (this.currentEvent.rollMap[5] < 0 && !this.isDemocrat) {
    //     this.votes.changeNationalClimate(-this.currentEvent.rollMap[5]/2, this.currentEvent.rollMap[5]/2);
    //     this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[5] + ' to the left', 2000);
    //   }
    // }
    // await new Promise(f => setTimeout(f, 2400));
    this.endEvent();
  }

  async presentToast(message, duration, color = 'primary') {
    const toast = await this.toastController.create({
      message,
      duration,
      color,
      position: 'middle',
      mode: 'md'
    });
    toast.present();
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
    this.router.navigateByUrl('/tabs/tab1');
  }
}
