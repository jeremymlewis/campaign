import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AudioService } from '../services/audio.service';
import { VotesStore } from '../../data-store/votes.store';
import { MultiPlayerService } from 'src/app/services/multiplayer.service';
import { ModalController } from '@ionic/angular';
import { ModalToastComponent } from 'src/app/general-components/modal-toast/modal-toast.component';

@Component({
  selector: 'app-host-page',
  templateUrl: 'host-join.component.html',
  styleUrls: ['host-join.component.scss']
})
export class HostJoinPage implements OnInit {
  joinSelected = false;
  hostSelected = false;
  hostCode = "ABFED";
  joinCode = "";
  loading = false;
  loadingDots = "...";

  constructor(private route: Router,
    public votes: VotesStore,
    private modalCtrl: ModalController,
    public multiplayer: MultiPlayerService) {}

  ngOnInit(): void {

  }

  join() {
    this.joinSelected = true;
    this.hostSelected = false;
  }

  host() {
    this.multiplayer.newDoc();
    this.hostCode = this.multiplayer.currentDoc;
    this.joinSelected = false;
    this.hostSelected = true;
  }

  joinSubmit() {
    this.loading = true;
    this.multiplayer.join(this.joinCode);
    this.fireLoadingAnimation();
  }

  next() {
    //set store details appropriately
    this.route.navigateByUrl('/options/party');
  }

  continue() {
    this.joinSelected = false;
    this.hostSelected = false;
    this.loading = false;
    this.route.navigateByUrl('/');
  }

  verifyJoin() {
    this.joinCode = this.joinCode.replace(/[^a-z]/gi, '');
    this.joinCode = this.joinCode.toUpperCase();
    if (this.joinCode.length > 4) {
      this.joinCode = this.joinCode.slice(0,4);
    }
  }

  async fireLoadingAnimation() {
    console.log("animations")
    this.loadingDots = "."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = ".."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = "..."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = "."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = ".."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = "..."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = "."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = ".."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = "..."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = "."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = ".."
    await new Promise(f => setTimeout(f, 500));
    this.loadingDots = "..."
    await new Promise(f => setTimeout(f, 500));
    this.openModal("We are unable to connect to the servers right now. Try again later.","Connection Failed")
  }

  async openModal(message, title = 'Notice') {
    const modal = await this.modalCtrl.create({
      component: ModalToastComponent,
      componentProps: { message, title },
      cssClass: "small-modal"
    });

    modal.onDidDismiss().then( () => {
      this.loading = false;
    });

    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }

}
