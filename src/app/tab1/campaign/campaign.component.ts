import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { VotesStore } from '../../data-store/votes.store';
import { State } from 'src/app/data-store/state';
import { ModalToastComponent } from 'src/app/general-components/modal-toast/modal-toast.component';
import { MultiPlayerService } from 'src/app/services/multiplayer.service';

@Component({
  selector: 'app-campaign',
  templateUrl: 'campaign.component.html',
  styleUrls: ['campaign.component.css']
})
export class CampaignPage implements OnInit {
  chosenState: State = null;
  isDemocrat: boolean;
  isThird: boolean;
  effective = true;

  canBack = true;
  states: State[];

  constructor(private router: Router,
    private modalCtrl: ModalController,
    private toastController: ToastController,
    private multiplayer: MultiPlayerService,
    private votes: VotesStore) {}

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
    this.isThird = this.votes.getUserIsThird();
    this.states = this.votes.getSortedStates();
  }

  ngAfterViewInit() {
    if (!this.votes.hasSeenCampaignPopup()) {
      this.votes.campaignPopup = true;
      this.openInfoModal("You can visit any state but be mindful that your efforts will be less successful in states that are less receptive to your party's positions. For example, it willl be harder for a Republican campaigning in CA to win over voters than if they visit a swing state like Florida or a red state like Indiana.", "Welcome to the campaign trail!");
    }
  }

  inputChange() {
    console.log("On Changes")
    if (this.chosenState?.protected) {
      this.effective = false;
    } else {
      this.effective = true;
    }
  }

  rollStarted() {
    this.canBack = false;
  }

  checkRecordCompletion() {
    //set false to if they made it thorugh a whole game without visiting a state.
  }

  async handleRoll(roll: number) {

    let modifier = 0;
    const stateId = this.chosenState.abbreviation;

    if (this.chosenState.protected) {
      modifier = -1;
    }


    const originalRoll = roll;
    roll = Math.floor(roll / 2) + modifier;

    this.votes.stateVisited(this.chosenState);
    if (this.chosenState) {
      if (this.isDemocrat) {
        this.votes.changeStateClimate(stateId, roll, 0);
      } else {
        this.votes.changeStateClimate(stateId , 0, roll);
      }

      this.openModal('You rolled a ' + originalRoll + ', your polling numbers go up by ' + roll + '% in ' + this.chosenState.name, "Results", stateId, roll);
    }
  }

  toNextTurn(stateId, roll) {
    if (this.votes.isMultiplayer) {
      if (this.votes.isHost) {
        this.multiplayer.sendHostMove("Visited", [stateId], roll);
        this.router.navigateByUrl('/tabs/tab1/wait-turn')
      } else {
        this.multiplayer.sendGuestMove("Visited", [stateId], roll);
        this.router.navigateByUrl('/tabs/tab1/wait-turn')
      }
      //MAKE THIS EMIT TO MULTIPLAYER FOR ALL THREE MOVE OPTIONS
    } else {
      this.router.navigateByUrl('/tabs/tab1/opponent', { replaceUrl: true });
    }
  }

  back() {
    this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
  }


  async openInfoModal(message, title = 'Results') {
    const modal = await this.modalCtrl.create({
      component: ModalToastComponent,
      componentProps: { message, title },
      cssClass: "large-modal"
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }

  async openModal(message, title = 'Results', stateId, roll) {
    const modal = await this.modalCtrl.create({
      component: ModalToastComponent,
      componentProps: { message, title },
      cssClass: "small-modal"
    });

    modal.onDidDismiss().then( () => {
      this.toNextTurn(stateId, roll);
    });

    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }
}
