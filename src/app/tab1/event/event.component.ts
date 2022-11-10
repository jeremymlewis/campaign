/* eslint-disable max-len */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/stores/votes.store';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.css']
})
export class EventPage {
  constructor(private router: Router, public votes: VotesStore, private toastController: ToastController, public textService: TextService) {}

  // back() {
  // }


  setNewEvent(debate: boolean) {
    this.textService.getEvents();
    if (debate) {
      //setNew Event to be a debate...
    } else {
      //pick an event at random... need some input as to how to choose which event we want next.
    }
  }

  async handleRoll(roll: number) {
    if (roll < 3) {
      this.votes.changeNationalClimate(1/2, -1/2);
      this.presentToast('National Climate moved ' + 1 + ' to the left', 2000);
    } else if (roll === 3) {
      this.votes.changeNationalClimate(1, -1);
      this.presentToast('National Climate moved ' + 2 + ' to the left', 2000);

    } else if (roll < 6) {
      this.votes.changeNationalClimate(-1/2, 1/2);
      this.presentToast('National Climate moved ' + 1 + ' to the right', 2000);
    } else {
      this.votes.changeNationalClimate(-1, 1);
      this.presentToast('National Climate moved ' + 2 + ' to the right', 2000);

    }
    await new Promise(f => setTimeout(f, 2200));
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
    this.router.navigateByUrl('/tabs/tab1');
  }
}
