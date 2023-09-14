/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/stores/votes.store';

@Component({
  selector: 'app-results',
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.css']
})
export class ResultsPage implements OnInit {
  constructor(private router: Router, private toastController: ToastController, public votes: VotesStore, private textService: TextService) {}

  ngOnInit() {
      if (this.votes.isDemocrat) {
        this.votes.addGameStats(this.votes.getUserWon(),true,this.votes.getFinalBlue());
      } else {
        this.votes.addGameStats(this.votes.getUserWon(),false,this.votes.getFinalRed());
      }
  }


  mainMenu() {
    this.votes.reset();
    this.router.navigateByUrl('/');
  }
}
