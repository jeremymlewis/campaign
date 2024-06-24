import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotesStore } from '../../data-store/votes.store';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal-toast.component.html',
  styleUrls: ['modal-toast.component.css']
})
export class ModalToastComponent {
  public title = 'Title';
  public message = 'Message';

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }
}
