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
    if (this.chosenState) {
      if (this.isDemocrat) {
        //TODO for now, we just take the full roll value...
        this.votes.changeStateClimate(this.chosenState, roll, 0);
      } else {
        //TODO for now, we just take the full roll value...
        this.votes.changeStateClimate(this.chosenState, 0, roll);
      }
      this.presentToast('You rolled a ' + roll + ', making a difference of ' + roll + ' in ' + this.chosenState, 3000);
              //TODO for now, we just take the full roll value...
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
