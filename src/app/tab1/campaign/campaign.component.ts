import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VotesStore } from '../../stores/votes.store';

@Component({
  selector: 'app-campaign',
  templateUrl: 'campaign.component.html',
  styleUrls: ['campaign.component.css']
})
export class CampaignPage implements OnInit {
  chosenState: string;
  isDemocrat: boolean;
  canBack = true;

  constructor(private router: Router, private toastController: ToastController, private votes: VotesStore) {}

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
  }

  async handleRoll(roll: number) {
    this.canBack = false;
    //
    const stateId = this.chosenState.split(',')[0];
    const stateModifier = this.chosenState.split(',')[1];
    const originalRoll = roll;
    if (this.chosenState) {
      if (this.isDemocrat) {
        if (stateModifier === '1') {
          roll -= 1;
        } else if (stateModifier === '2') {
          roll -= 2;
        }
        if (roll < 0) {
          roll = 0;
        }
        this.votes.changeStateClimate(stateId, roll, 0);
      } else {
        if (stateModifier === '3') {
          roll -= 1;
        } else if (stateModifier === '4') {
          roll -= 2;
        }
        if (roll < 0) {
          roll = 0;
        }
        this.votes.changeStateClimate(stateId , 0, roll);
      }
      this.presentToast('You rolled a ' + originalRoll + ', making a difference of ' + roll + ' in ' + stateId, 3000);
      await new Promise(f => setTimeout(f, 3200));
      this.toNextTurn();
    } else {
      this.presentToast('Please select a state', 1000, 'danger');
    }
  }

  toNextTurn() {
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
