import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { VotesStore } from '../../data-store/votes.store';
import { ModalToastComponent } from 'src/app/general-components/modal-toast/modal-toast.component';

@Component({
  selector: 'app-advertise',
  templateUrl: 'advertise.component.html',
  styleUrls: ['advertise.component.css']
})
export class AdvertisePage implements OnInit {
  selectedStates: string[];
  isDemocrat: boolean;
  attackAd: boolean = false;
  isThird: boolean;
  choosenGroup: string;
  diceEnabled = false;
  canBack = true;
  myGroup = new FormGroup({
    buttonGroup: new FormControl()
  });
  constructor(private router: Router, private modalCtrl: ModalController, public votes: VotesStore) {}

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
    this.isThird = this.votes.getUserIsThird();
  }

  enableDice() {
    this.diceEnabled = true;
  }

  getGroup() {
    //JERMY CHECK THIS FOR DIFFERING HISTORIC GROUPS && randomize it for random maybe?
    if (this.myGroup.value.buttonGroup === 'one') {
      if (!this.votes.Washington) {
        this.selectedStates = ['CA','NV','OR'];
      } else if (this.votes.Hawaii) {
        this.selectedStates = ['HI','CA','WA','OR'];
      } else {
        this.selectedStates = ['CA','WA','OR'];
      }
    } else if (this.myGroup.value.buttonGroup === 'two') {
      this.selectedStates = ['IL','MN'];
    } else if (this.myGroup.value.buttonGroup === 'three') {
      if (this.votes.NewMexico) {
        this.selectedStates = ['NM','CO','NV','AZ'];
      } else {
        this.selectedStates = ['NY', 'NJ', 'CT'];
      }
    } else if (this.myGroup.value.buttonGroup === 'four') {
      this.selectedStates = ['ME','NH','VA','PA'];
    } else if (this.myGroup.value.buttonGroup === 'five') {
      this.selectedStates = ['WI','IA','MI','OH'];
    } else if (this.myGroup.value.buttonGroup === 'six') {
      this.selectedStates = ['FL','NC','GA'];
    } else if (this.myGroup.value.buttonGroup === 'seven') {
      if (this.votes.Alaska) {
        this.selectedStates = ['TX', 'AK'];
      } else {
        this.selectedStates = ['TX'];
      }
    } else if (this.myGroup.value.buttonGroup === 'eight') {
      this.selectedStates = ['SC','MO','IN','MS','LA'];
    } else {
      //error
    }
  }

  rollStarted() {
    this.canBack = false;
  }

  async handleAttackRoll(roll: number) {
    this.canBack = false;
    this.getGroup();

    if (roll === 1) {
      this.openModal('You rolled a ' + roll + ', Your advertising backfired, losing you 1% support!');
      for (const state in this.selectedStates) {
        if (this.isDemocrat) {
          this.votes.changeStateClimate(this.selectedStates[state], -1, 0);
        } else {
          this.votes.changeStateClimate(this.selectedStates[state], 0, -1);
        }
      }
    } else if (roll < 4) {
      this.openModal('You rolled a ' + roll + ', Your advertising made no difference.');
    } else if (roll < 6) {
      this.openModal('You rolled a ' + roll + ', Your advertising made a difference of 2% in your selected states!');
      for (const state in this.selectedStates) {
        if (this.isDemocrat) {
          this.votes.changeStateClimate(this.selectedStates[state], 2, 0);
        } else {
          this.votes.changeStateClimate(this.selectedStates[state], 0, 2);
        }
      }
    } else {
      this.openModal('You rolled a ' + roll + ', Your advertising made a difference of 3% in your selected states!');
      for (const state in this.selectedStates) {
        if (this.isDemocrat) {
          this.votes.changeStateClimate(this.selectedStates[state], 3, 0);
        } else {
          this.votes.changeStateClimate(this.selectedStates[state], 0, 3);
        }
      }
      // await new Promise(f => setTimeout(f, 3200));
      // this.toNextTurn();
    }
  }

  async handleRoll(roll: number) {
    this.canBack = false;
    this.getGroup();

    if (this.isThird) {
      //TODO3
      return;
    }



    if (roll === 1) {
      this.openModal('You rolled a ' + roll + ', Your advertising made no difference!');
      // await new Promise(f => setTimeout(f, 3200));
      // this.toNextTurn();
    } else if (roll < 6) {
      this.openModal('You rolled a ' + roll + ', Your advertising made a difference of 1% in your selected states!');
      for (const state in this.selectedStates) {
        if (this.isDemocrat) {
          this.votes.changeStateClimate(this.selectedStates[state], 1, 0);
        } else {
          this.votes.changeStateClimate(this.selectedStates[state], 0, 1);
        }
      }
      // await new Promise(f => setTimeout(f, 3200));
      // this.toNextTurn();
    } else {
      this.openModal('You rolled a ' + roll + ', Your advertising made a difference of 2% in your selected states!');
      for (const state in this.selectedStates) {
        if (this.isDemocrat) {
          this.votes.changeStateClimate(this.selectedStates[state], 2, 0);
        } else {
          this.votes.changeStateClimate(this.selectedStates[state], 0, 2);
        }
      }
      // await new Promise(f => setTimeout(f, 3200));
      // this.toNextTurn();
    }
  }

  toNextTurn() {
    this.router.navigateByUrl('/tabs/tab1/opponent', { replaceUrl: true });
  }

  back() {
    this.votes.funds++;
    this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
  }

  // async presentToast(message, duration, color = 'primary') {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration,
  //     color,
  //     position: 'middle',
  //     mode: 'md'
  //   });
  //   toast.present();
  // }

  async openModal(message, title = 'Results') {
    const modal = await this.modalCtrl.create({
      component: ModalToastComponent,
      componentProps: { message, title },
      cssClass: "small-modal"
    });

    modal.onDidDismiss().then( () => {
      this.toNextTurn();
    });

    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }
}
