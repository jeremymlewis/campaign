import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AudioService } from '../services/audio.service';
import { VotesStore } from '../../data-store/votes.store';
import { MultiPlayerService } from 'src/app/services/multiplayer.service';
import { ModalController } from '@ionic/angular';
import { ModalToastComponent } from 'src/app/general-components/modal-toast/modal-toast.component';

@Component({
  selector: 'app-host-fail-page',
  templateUrl: 'host-join-fail.component.html',
  styleUrls: ['host-join.component.scss']
})
export class HostJoinFailPage {
  constructor(private route: Router,
    public votes: VotesStore,
    private modalCtrl: ModalController,
    public multiplayer: MultiPlayerService) {}

    ionViewWillEnter(){
      if (this.votes.turn > 1) {
        this.openModal("Connection lost with your opponent.")
      } else {
        this.openModal("Invalid join code. Check the code you were given and try again.")
      }
    }


    async openModal(message, title = "Connection Failed") {
      const modal = await this.modalCtrl.create({
        component: ModalToastComponent,
        componentProps: { message, title },
        cssClass: "small-modal"
      });

      modal.onDidDismiss().then( () => {
        this.route.navigateByUrl('/host-join');
      });

      modal.present();
      const { data, role } = await modal.onWillDismiss();
    }
}
