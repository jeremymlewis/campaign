import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { VotesStore } from '../../stores/votes.store';
import { State } from 'src/app/stores/state';
import { ModalToastComponent } from 'src/app/modal-toast/modal-toast.component';

@Component({
  selector: 'app-campaign',
  templateUrl: 'campaign.component.html',
  styleUrls: ['campaign.component.css']
})
export class CampaignPage implements OnInit {
  chosenState: State = null;
  isDemocrat: boolean;
  isThird: boolean;

  canBack = true;
  states: State[];

  constructor(private router: Router,
    private modalCtrl: ModalController,
    private toastController: ToastController,
    private votes: VotesStore) {}

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
    this.isThird = this.votes.getUserIsThird();
    this.states = this.votes.getSortedStates();
  }

  rollStarted() {
    this.canBack = false;
  }

  async handleRoll(roll: number) {
    //this.canBack = false;
    //TODO3
    let modifier = 0;
    const stateId = this.chosenState.abbreviation;

    if (this.chosenState.protected) {
      modifier = -1;
    }

    console.log(stateId);

    const originalRoll = roll;
    roll = Math.floor(roll / 2) + modifier;

    if (this.chosenState) {
      if (this.isDemocrat) {
        this.votes.changeStateClimate(stateId, roll, 0);
      } else {
        this.votes.changeStateClimate(stateId , 0, roll);
      }
      //TODO3 this number need
      this.openModal('You rolled a ' + originalRoll + ', your polling numbers go up by ' + roll + '% in ' + this.chosenState.name);
    }
  }

  toNextTurn() {
    this.router.navigateByUrl('/tabs/tab1/opponent', { replaceUrl: true });
  }

  back() {
    this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
  }


  async openModal(message, title = 'Results') {
    const modal = await this.modalCtrl.create({
      component: ModalToastComponent,
      componentProps: { message, title }
    });

    modal.onDidDismiss().then( () => {
      this.toNextTurn();
    });

    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }
}
