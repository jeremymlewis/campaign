import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VotesStore } from 'src/app/stores/votes.store';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: []
})
export class EventPage {
  constructor(private router: Router, public votes: VotesStore, private toastController: ToastController) {}

  // back() {
  // }

  async handleRoll(roll: number) {
    if (roll <= 3) {
      this.votes.changeNationalClimate(roll/2, -roll/2);
      this.presentToast('National Climate moved ' + roll + ' to the left', 2000);
    } else {
      this.votes.changeNationalClimate(-(roll-3)/2, (roll-3)/2);
      this.presentToast('National Climate moved ' + (roll-3) + ' to the right', 2000);
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
