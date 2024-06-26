import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalToastComponent } from 'src/app/general-components/modal-toast/modal-toast.component';
import { VotesStore } from 'src/app/data-store/votes.store';
import { ModalController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { MultiPlayerService } from 'src/app/services/multiplayer.service';

@Component({
  selector: 'app-fundraise',
  templateUrl: 'fundraise.component.html',
  styleUrls: ['fundraise.component.css']
})
export class FundraisePage implements OnInit{
  canBack = true;
  isDemocrat: boolean;
  presidentIcon = '';
  eventHistory = '';

  constructor(private router: Router, private modalCtrl: ModalController, private votes: VotesStore,
     private textService: TextService, private multiplayer: MultiPlayerService) {}

  ngOnInit(): void {
      this.isDemocrat = this.votes.isDemocrat;
  }

  ionViewWillEnter() {
    this.getFunFact();
  }

  getFunFact() {
    const facts = this.textService.getFundraisingFacts();
    const currentFact = facts[Math.floor(Math.random() * facts.length)];
    this.presidentIcon = currentFact.presidentIcon;
    this.eventHistory = currentFact.eventHistory;
  }

  rollStarted() {
    //jermy emit something here to disable the footer
    this.canBack = false;
  }

  async handleRoll(rollValue: number) {
    this.canBack = false;
    if (rollValue <= 3) {
      this.votes.funds++;
      this.openModal('You rolled a ' + rollValue + ', raising enough to run 1 ad campaign');
    } else if (rollValue <= 5) {
      this.votes.funds += 2;
      this.openModal('You rolled a ' + rollValue + ', raising enough to run 2 ad campaigns');
    } else {
      this.votes.funds += 3;
      this.openModal('You rolled a ' + rollValue + ', raising enough to run 3 ad campaigns');
    }
  }

  toNextTurn() {
    this.canBack = true;
    if (this.votes.isMultiplayer) {
      if (this.votes.isHost) {
        this.multiplayer.sendHostMove("fundraise", [], this.votes.funds);
        this.router.navigateByUrl('/tabs/tab1/wait-turn')
      } else {
        this.multiplayer.sendGuestMove("fundraise", [], this.votes.funds);
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
