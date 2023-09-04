import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VotesStore } from '../../stores/votes.store';

@Component({
  selector: 'app-advertise',
  templateUrl: 'advertise.component.html',
  styleUrls: ['advertise.component.css']
})
export class AdvertisePage implements OnInit {
  selectedStates: string[];
  isDemocrat: boolean;
  isThird: boolean;
  choosenGroup: string;
  diceEnabled = false;
  canBack = true;
  myGroup = new FormGroup({
    buttonGroup: new FormControl()
  });
  constructor(private router: Router, private toastController: ToastController, private votes: VotesStore) {}

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
    this.isThird = this.votes.getUserIsThird();
  }

  enableDice() {
    this.diceEnabled = true;
  }

  getGroup() {
    if (this.myGroup.value.buttonGroup === 'one') {
      this.selectedStates = ['HI','CA','WA','OR'];
    } else if (this.myGroup.value.buttonGroup === 'two') {
      this.selectedStates = ['IL','MN'];
    } else if (this.myGroup.value.buttonGroup === 'three') {
      this.selectedStates = ['NM','CO','NV','AZ'];
    } else if (this.myGroup.value.buttonGroup === 'four') {
      this.selectedStates = ['ME','NH','VA','PA'];
    } else if (this.myGroup.value.buttonGroup === 'five') {
      this.selectedStates = ['WI','IA','MI','OH'];
    } else if (this.myGroup.value.buttonGroup === 'six') {
      this.selectedStates = ['FL','NC','GA'];
    } else if (this.myGroup.value.buttonGroup === 'seven') {
      this.selectedStates = ['TX'];
    } else if (this.myGroup.value.buttonGroup === 'eight') {
      this.selectedStates = ['SC','MO','IN','MT','MS','AK','LA'];
    } else {
      //error
    }
  }

  rollStarted() {
    this.canBack = false;
  }

  async handleRoll(roll: number) {
    this.canBack = false;
    this.getGroup();

    if (this.isThird) {
      //TODO3
      return;
    }



    if (roll === 1) {
      this.presentToast('You rolled a ' + roll + ', Your advertising made no difference!' , 3000);
      await new Promise(f => setTimeout(f, 3200));
      this.toNextTurn();
    } else if (roll < 6) {
      this.presentToast('You rolled a ' + roll + ', Your advertising made a difference of 1 in your selected states!', 3000);
      for (const state in this.selectedStates) {
        if (this.isDemocrat) {
          this.votes.changeStateClimate(this.selectedStates[state], 1, 0);
        } else {
          this.votes.changeStateClimate(this.selectedStates[state], 0, 1);
        }
      }
      await new Promise(f => setTimeout(f, 3200));
      this.toNextTurn();
    } else {
      this.presentToast('You rolled a ' + roll + ', Your advertising made a difference of 2 in your selected states!', 3000);
      for (const state in this.selectedStates) {
        if (this.isDemocrat) {
          this.votes.changeStateClimate(this.selectedStates[state], 2, 0);
        } else {
          this.votes.changeStateClimate(this.selectedStates[state], 0, 2);
        }
      }
      await new Promise(f => setTimeout(f, 3200));
      this.toNextTurn();
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
