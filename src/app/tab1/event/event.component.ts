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
  isDemocrat: boolean;
  constructor(private router: Router, public votes: VotesStore, private toastController: ToastController, public textService: TextService) {}


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


    this.currentEvent = this.getCurrentEvent();
    //this.currentEvent = this.allEvents[this.currentIndex];
    const isDebate = (this.currentIndex === 3 || this.currentIndex === 6 || this.currentIndex === 8);
    if (this.votes.NationalClimate > 3 && !isDebate) {
      if (this.isDemocrat) {
        this.currentEvent = this.allEvents[9];
      } else {
        this.currentEvent = this.allEvents[10];
      }
    } else if (this.votes.NationalClimate < -3 && !isDebate) {
      if (this.isDemocrat) {
        this.currentEvent = this.allEvents[10];
      } else {
        this.currentEvent = this.allEvents[9];
      }
    }
    this.eventTitle = this.currentEvent.title;
    this.eventDescription = this.currentEvent.description;
    this.eventHistory = this.currentEvent.history;
    this.eventIcon = this.currentEvent.imageSrc;
    this.eventYear = this.currentEvent.yearInvolved;
    this.eventPersonInvolved = this.currentEvent.politicanInvolved;
    this.eventPoints = this.currentEvent.points;
    console.log(this.currentIndex);
    console.log(this.currentEvent);
  }

  getCurrentEvent(): Event {
    return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    const currentEventType = this.getCurrentEventType();
    if (currentEventType === 'superPac') {
      return this.allEvents[0]; //TODO use real events
    } else if (currentEventType === 'endorsement') {
      return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    } else if (currentEventType === 'boon') {
      return this.boonEvents[Math.floor(Math.random() * this.boonEvents.length)];
    } else if (currentEventType === 'mediaTour') {
      return this.allEvents[0]; //TODO use real events
    } else if (currentEventType === 'hotButton') {
      return this.hotButtonEvents[Math.floor(Math.random() * this.hotButtonEvents.length)];
    } else if (currentEventType === 'burn') {
      return this.allEvents[0]; //TODO use real events
    } else if (currentEventType === 'gaffe') {
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
    draw += Math.ceil(score * 1.5);

    //Current total 120 lol but not finished TODO jermy
    if (draw > 85) { //Base 15%
      return 'superPac';
    }
    if (draw > 65 && draw < 86) { //Base 20%
      return 'endorsement';
    }
    if (draw > 55 && draw < 66) { //Base 10%
      return 'boon';
    }
    if (draw > 45 && draw < 56) { //Base 10%
      return 'mediaTour';
    }
    if (draw > 30 && draw < 46) { //Base 15%
      return 'hotButton';
    }
    if (draw > 20 && draw < 31) { //Base 10%
      return 'burn';
    }
    if (draw > 9 && draw < 21) { //Base 11%
      return 'gaffe';
    }
    else { //Base 9%
      return 'scandal';
    }
  }

  async handleRoll(roll: number) {
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
