import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextService } from '../services/text.services';
import { ToastController } from '@ionic/angular';
import { VotesStore } from '../stores/votes.store';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css']
})
export class Tab1Page implements OnInit, AfterViewInit {
  text = '';
  turns: string[];
  currentTurn: string;
  funds = 0;
  isDemocrat: boolean;
  isThird: boolean;
  partyName = '';
  constructor(
    private audio: AudioService,
    private route: Router,
    private textService: TextService,
    private toastController: ToastController,
    public votes: VotesStore) {}

  ngOnInit() {
    this.partyName = this.votes.getThirdPartyName();
    this.turns = this.textService.getTurns();
    this.currentTurn = this.turns[0];//NEEDS TO BE UPDATED
    this.isThird = this.votes.getUserIsThird();
    this.isDemocrat = this.votes.getUserIsDem();
  }


  ionViewWillEnter(){
    this.isDemocrat = this.votes.isDemocrat;
  }

  ngAfterViewInit() {
    // this.audio.preload('a3', 'assets/audio/vote.mp3');
    // this.audio.preload('a5', 'assets/audio/thats-america.mp3');
    // this.audio.preload('a6', 'assets/audio/dont-boo-vote.mp3');
    // this.audio.preload('a8', 'assets/audio/america.mp3');

    // this.audio.preload('a2', 'assets/audio/i-said-no.mp3');
    // this.audio.preload('a0', 'assets/audio/thank-you-and-good-evening.mp3');
    // this.audio.preload('a1', 'assets/audio/bad-news.mp3');

    // this.audio.preload('a4', 'assets/audio/come-on-man.mp3');
    // this.audio.preload('a7', 'assets/audio/congratulations.mp3');
  }

  getCurrentTurn(): string {
    return this.turns[this.votes.turn];
  }


  fundraise() {
    this.audio.play('a8');
    this.takeTurn();
    this.route.navigateByUrl('tabs/tab1/fundraise');
  }

  campaign() {
    this.audio.play('a3');
    this.takeTurn();
    this.route.navigateByUrl('tabs/tab1/campaign');
  }

  advertising() {
    this.audio.play('a5');
    if (this.votes.funds > 0) {
      this.votes.funds--;
      this.takeTurn();
      this.route.navigateByUrl('tabs/tab1/advertise');
    } else {
      this.presentToast('You need to fundraise before you can spend on advertising!', 3000, 'danger');
    }
  }

  takeTurn() {
    // const i = Math.floor(Math.random() * 9);
    // this.audio.play('a'+i);
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
