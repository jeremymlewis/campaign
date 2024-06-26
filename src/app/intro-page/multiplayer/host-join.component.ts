import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AudioService } from '../services/audio.service';
import { VotesStore } from '../../data-store/votes.store';
import { MultiPlayerService } from 'src/app/services/multiplayer.service';
import { ModalController } from '@ionic/angular';
import { ModalToastComponent } from 'src/app/general-components/modal-toast/modal-toast.component';
import { Subscription } from 'rxjs';

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
  readyToBegin = false;
  private createSuccessEvent: Subscription;

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
    this.hostCode = this.multiplayer.createGame();
    this.readyToBegin = true;
    this.joinSelected = false;
    this.hostSelected = true;
  }

  joinSubmit() {
    this.loading = true;
    this.multiplayer.joinGame(this.joinCode);
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

}
