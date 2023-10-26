import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalToastComponent } from 'src/app/modal-toast/modal-toast.component';
import { VotesStore } from 'src/app/stores/votes.store';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-fundraise',
  templateUrl: 'fundraise.component.html',
  styleUrls: ['fundraise.component.css']
})
export class FundraisePage implements OnInit{
  canBack = true;
  isDemocrat: boolean;
  constructor(private router: Router, private modalCtrl: ModalController, private votes: VotesStore) {}

  ngOnInit(): void {
      this.isDemocrat = this.votes.isDemocrat;
  }
  rollStarted() {
    //jermy emit something here to disable the footer
    this.canBack = false;
  }

  async handleRoll(rollValue: number) {
    this.canBack = false;
    if (rollValue <= 4) {
      this.votes.funds++;
      this.openModal('You rolled a ' + rollValue + ', raising enough to run 1 ad campaign');
    } else {
      this.votes.funds += 2;
      this.openModal('You rolled a ' + rollValue + ', raising enough to run 2 ad campaigns');
    }
  }

  toNextTurn() {
    this.canBack = true;
    this.router.navigateByUrl('/tabs/tab1/opponent', { replaceUrl: true });
  }

  back() {
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
      componentProps: { message, title }
    });

    modal.onDidDismiss().then( () => {
      this.toNextTurn();
    });

    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }

}
