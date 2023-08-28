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
  boonEvents: Event[];
  endorsementEvents: Event[];
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
    this.boonEvents = this.textService.getBoonEvents();
    this.endorsementEvents = this.textService.getEndorsementEvents();
    this.hotButtonEvents = this.textService.getHotButtonEvents();
    this.endingEvents = this.textService.getEndingEvents();
    this.mediaTourEvents = this.textService.getMediaTourEvents();

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
    //console.log(this.currentIndex);
    console.log(this.currentEvent);
  }

  getCurrentEvent(): Event {
   // return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    const currentEventType = this.getCurrentEventType();
    if (currentEventType === 'superPac') {
      return   {
        title:'Super Pac/Donation',
        description:'You received a donation from a super pac',
        points: 1,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalEvent: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: 'a',
        yearInvolved:'a',
      };
    } else if (currentEventType === 'endorsement') {
      return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    } else if (currentEventType === 'boon') {
      return this.boonEvents[Math.floor(Math.random() * this.boonEvents.length)];
    } else if (currentEventType === 'mediaTour') {
      return this.mediaTourEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    } else if (currentEventType === 'hotButton') {
      return this.hotButtonEvents[Math.floor(Math.random() * this.hotButtonEvents.length)];
    }  else if (currentEventType === 'gaffe') {
      return this.gaffeEvents[Math.floor(Math.random() * this.gaffeEvents.length)];
    } else if (currentEventType === 'scandal') {
      return this.scandalEvents[Math.floor(Math.random() * this.scandalEvents.length)];
    } else {
      return this.allEvents[0];
    }

  }

  getCurrentEventType(): string {
    const score: number = this.votes.getCurrentScore();
    //draw a random number... if more that 50 give a positive event. If less give a negitiave event.
    let draw = Math.floor(Math.random() * 100) + 1;
    //The better a player is doing, give them worse event draw. Worse a player is doing give them a better draw.
    if (score < 0) {
      draw -= Math.ceil(Math.sqrt(Math.abs(score)));
    } else {
      draw += Math.ceil(Math.sqrt(Math.abs(score)));
    }
    console.log(draw);
    draw = draw % 100;
    if (draw < 0) {
      draw *= -1;
    }
    //Current total 120 lol but not finished TODO jermy
    if (draw > 85) { //Base 15%
      return 'mediaTour'; //1 or 2 no impact... 3/4 +1 to each state. +2 to each state.
    }
    if (draw > 65 && draw < 86) { //Base 20%
      return 'endorsement'; //Big national (that they ran ads in a region)
    }
    if (draw > 50 && draw < 64) { //Base 10%
      return 'superPac'; //Gain or lose but only in swing states (anything currently within 3 points)
    }
    if (draw > 28 && draw < 49) { //Base 15%
      return 'hotButton';
      //Specific place, a Bridge collapses and people talk about it... i.e. event draws event to an issue.
      //Free point if you agree, or risk it to see if you lose or not (button to accept or decline) John Kerry
    }
    if (draw > 8 && draw < 27) { //Base 11%
      return 'gaffe'; //loose a point, 2, or 3
    }
    else { //Base 9%
      return 'scandal'; //loose 4-6
    }
  }

  async handleRoll(roll: number) {
    if (this.isDemocrat) {
      this.votes.changeNationalClimate(roll/2, -roll/2);
    } else {
      this.votes.changeNationalClimate(-roll/2, roll/2);
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
