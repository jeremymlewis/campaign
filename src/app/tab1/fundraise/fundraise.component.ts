import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VotesStore } from 'src/app/stores/votes.store';

@Component({
  selector: 'app-fundraise',
  templateUrl: 'fundraise.component.html',
  styleUrls: ['fundraise.component.css']
})
export class FundraisePage {
  canBack = true;
  constructor(private router: Router, private toastController: ToastController, private votes: VotesStore) {}

  rollStarted() {
    //jermy emit something here to disable the footer
    this.canBack = false;
  }

  async handleRoll(rollValue: number) {
    this.canBack = false;
    if (rollValue <= 4) {
      this.votes.funds++;
      this.presentToast('You rolled a ' + rollValue + ', raising enough to run 1 ad campaign', 2900);
    } else {
      this.votes.funds += 2;
      this.presentToast('You rolled a ' + rollValue + ', raising enough to run 2 ad campaigns', 2900);
    }
    await new Promise(f => setTimeout(f, 3000));
    this.toNextTurn();
  }

  toNextTurn() {
    this.canBack = true;
    this.router.navigateByUrl('/tabs/tab1/opponent');
  }

  back() {
    this.router.navigateByUrl('/tabs/tab1');
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
}
