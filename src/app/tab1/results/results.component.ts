/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/stores/votes.store';

@Component({
  selector: 'app-results',
  templateUrl: 'results.component.html',
  styleUrls: []
})
export class ResultsPage {
  constructor(private router: Router, private toastController: ToastController, public votes: VotesStore, private textService: TextService) {}

  mainMenu() {
    this.router.navigateByUrl('/');
  }
}
