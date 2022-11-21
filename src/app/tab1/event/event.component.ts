/* eslint-disable max-len */
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/stores/votes.store';
import { Event } from '../../stores/State';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.css']
})
export class EventPage implements OnInit {
  currentEvent: Event;
  allEvents: Event[];
  currentIndex = 0;
  eventTitle: string;
  eventDescription: string;
  eventRollsL: string;
  eventRollsR: string;
  isDemocrat: boolean;
  constructor(private router: Router, public votes: VotesStore, private toastController: ToastController, public textService: TextService) {}


  ngOnInit() {
    this.currentIndex = this.votes.round - 2;
    this.isDemocrat = this.votes.isDemocrat;
    this.allEvents = this.textService.getEvents();
    this.currentEvent = this.allEvents[this.currentIndex];
    this.eventTitle = this.currentEvent.title;
    this.eventDescription = this.currentEvent.description;
    this.eventRollsL = this.currentEvent.rollMapDescription1;
    this.eventRollsR = this.currentEvent.rollMapDescription2;
    console.log(this.currentIndex);
    console.log(this.currentEvent);
  }

  async handleRoll(roll: number) {
    if (roll === 1) {
      if (this.currentEvent.rollMap[0] > 0 && this.isDemocrat ) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[0]/2, -this.currentEvent.rollMap[0]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[0] + ' to the left', 2000);
      } else if (this.currentEvent.rollMap[0] < 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[0]/2, -this.currentEvent.rollMap[0]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[0] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[0] > 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[0]/2, this.currentEvent.rollMap[0]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[0] + ' to the right', 2000);
      }
      if (this.currentEvent.rollMap[0] < 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[0]/2, this.currentEvent.rollMap[0]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[0] + ' to the left', 2000);
      }
    }
    if (roll === 2) {
      if (this.currentEvent.rollMap[1] > 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[1]/2, -this.currentEvent.rollMap[1]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[1] + ' to the left', 2000);
      } else if (this.currentEvent.rollMap[1] > 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[1]/2, this.currentEvent.rollMap[1]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[1] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[1] < 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[1]/2, -this.currentEvent.rollMap[1]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[1] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[1] < 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[1]/2, this.currentEvent.rollMap[1]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[1] + ' to the left', 2000);
      }
    }
    if (roll === 3) {
      if (this.currentEvent.rollMap[2] > 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[2]/2, -this.currentEvent.rollMap[2]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[2] + ' to the left', 2000);
      } else if (this.currentEvent.rollMap[2] > 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[2]/2, this.currentEvent.rollMap[2]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[2] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[2] < 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[2]/2, -this.currentEvent.rollMap[2]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[2] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[2] < 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[2]/2, this.currentEvent.rollMap[2]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[2] + ' to the left', 2000);
      }
    }
    if (roll === 4) {
      if (this.currentEvent.rollMap[3] > 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[3]/2, -this.currentEvent.rollMap[3]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[3] + ' to the left', 2000);
      } else if (this.currentEvent.rollMap[3] > 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[3]/2, this.currentEvent.rollMap[3]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[3] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[3] < 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[3]/2, -this.currentEvent.rollMap[3]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[3] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[3] < 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[3]/2, this.currentEvent.rollMap[3]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[3] + ' to the left', 2000);
      }
    }
    if (roll === 5) {
      if (this.currentEvent.rollMap[4] > 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[4]/2, -this.currentEvent.rollMap[4]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[4] + ' to the left', 2000);
      } else if (this.currentEvent.rollMap[4] > 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[4]/2, this.currentEvent.rollMap[4]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[4] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[4] < 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[4]/2, -this.currentEvent.rollMap[4]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[4] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[4] < 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[4]/2, this.currentEvent.rollMap[4]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[4] + ' to the left', 2000);
      }
    }
    if (roll === 6) {
      if (this.currentEvent.rollMap[5] > 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[5]/2, -this.currentEvent.rollMap[5]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[5] + ' to the left', 2000);
      } else if (this.currentEvent.rollMap[5] > 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[5]/2, this.currentEvent.rollMap[5]/2);
        this.presentToast('National Climate moved ' + this.currentEvent.rollMap[5] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[5] < 0 && this.isDemocrat) {
        this.votes.changeNationalClimate(this.currentEvent.rollMap[5]/2, -this.currentEvent.rollMap[5]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[5] + ' to the right', 2000);
      } else if (this.currentEvent.rollMap[5] < 0 && !this.isDemocrat) {
        this.votes.changeNationalClimate(-this.currentEvent.rollMap[5]/2, this.currentEvent.rollMap[5]/2);
        this.presentToast('National Climate moved ' + -1*this.currentEvent.rollMap[5] + ' to the left', 2000);
      }
    }
    await new Promise(f => setTimeout(f, 2400));
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
    this.currentIndex++;
    if (this.currentIndex < 10) {
      console.log('new event: ' + this.currentIndex);
      this.currentEvent = this.allEvents[this.currentIndex];
      console.log(this.currentEvent);
    } else {
      this.currentIndex = 0;
      this.currentEvent = this.allEvents[this.currentIndex];
    }
    this.eventTitle = this.currentEvent.title;
    this.eventDescription = this.currentEvent.description;
    this.eventRollsL = this.currentEvent.rollMapDescription1;
    this.eventRollsR = this.currentEvent.rollMapDescription2;
    this.router.navigateByUrl('/tabs/tab1');
  }
}
