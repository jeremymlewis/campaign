import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextService } from '../services/text.services';
import { ToastController } from '@ionic/angular';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css']
})
export class Tab1Page implements OnInit {
  text = '';
  turns: string[];
  currentTurn: string;
  funds = 0;
  isDemocrat: boolean;
  constructor(
    private route: Router,
    private textService: TextService,
    private toastController: ToastController,
    public votes: VotesStore) {}

  ngOnInit() {
    this.turns = this.textService.getTurns();
    this.currentTurn = this.turns[0];//NEEDS TO BE UPDATED
    this.isDemocrat = this.votes.getUserIsDem();
  }

  getCurrentTurn(): string {
    return this.turns[this.votes.turn];
  }


  fundraise() {
    this.takeTurn();
    this.route.navigateByUrl('tabs/tab1/fundraise');
  }

  campaign() {
    this.takeTurn();
    this.route.navigateByUrl('tabs/tab1/campaign');
  }

  advertising() {
    if (this.votes.funds > 0) {
      this.votes.funds--;
      this.takeTurn();
      this.route.navigateByUrl('tabs/tab1/advertise');
    } else {
      this.presentToast('You need to fundraise before you can spend on advertising!', 3000, 'danger');
    }
  }

  takeTurn() {
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
