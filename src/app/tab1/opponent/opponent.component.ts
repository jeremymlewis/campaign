/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/stores/votes.store';

@Component({
  selector: 'app-opponent',
  templateUrl: 'opponent.component.html',
  styleUrls: []
})
export class OpponentPage implements OnInit {
  allActions: string[];
  constructor(private router: Router, private toastController: ToastController, private votes: VotesStore, private textService: TextService) {}

  ngOnInit() {
    this.getAllActions();
  }

  getAllActions() {
    this.allActions = this.textService.getOpponentActions();
  }

  getNextOpponentAction() {
    return this.allActions[this.votes.turn];
  }

  goToResults() {
    this.router.navigateByUrl('/tabs/tab1/results');
  }

  goToTab1() {
    this.router.navigateByUrl('tabs/tab1');
  }

  goToEvent() {
    this.router.navigateByUrl('/tabs/tab1/event');
  }

  goToDebate() {
    this.router.navigateByUrl('/tabs/tab1/debate');
  }

  nextEvent() {
    this.dummyAI();
    this.votes.turn++;
    if (this.votes.turn % 2 === 0) {
      this.votes.round++;
      if (this.votes.round > 10) {
        this.goToResults();
      } else if (this.votes.round === 4 || this.votes.round === 7 || this.votes.round === 10) {
        this.goToDebate();
      } else {
        this.goToEvent();
      }

    } else {
      this.goToTab1();
    }
  }


  dummyAI() {
    if (this.votes.turn === 1) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('FL',0,2);
      } else {
      this.votes.changeStateClimate('FL',2,0);
      }
    //fl+2
    } else if  (this.votes.turn === 4) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('TX',0,2);
      } else {
      this.votes.changeStateClimate('TX',2,0);
      }
      //tx+2
    } else if  (this.votes.turn === 5) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('NC',0,3);
      } else {
        this.votes.changeStateClimate('NC',3,0);
      }
    } else if  (this.votes.turn === 7) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('WI',0,1);
        this.votes.changeStateClimate('IA',0,0);
        this.votes.changeStateClimate('MI',0,1);
        this.votes.changeStateClimate('OH',0,1);
      } else {
        this.votes.changeStateClimate('WI',1,0);
        this.votes.changeStateClimate('IA',1,0);
        this.votes.changeStateClimate('MI',1,0);
        this.votes.changeStateClimate('OH',1,0);
      }
      //wi,ia,mi,oh 1
    } else if  (this.votes.turn === 8) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('GA',0,2);
      } else {
        this.votes.changeStateClimate('GA',2,0);
      }
      //ga 2
    } else if  (this.votes.turn === 10) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('NM',0,1);
        this.votes.changeStateClimate('CO',0,1);
        this.votes.changeStateClimate('NV',0,1);
        this.votes.changeStateClimate('AZ',0,1);
      } else {
        this.votes.changeStateClimate('NM',1,0);
        this.votes.changeStateClimate('CO',1,0);
        this.votes.changeStateClimate('NV',1,0);
        this.votes.changeStateClimate('AZ',1,0);
      }
      //nm, co nv az 1
    } else if  (this.votes.turn === 11) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('IL',0,2);
      } else {
        this.votes.changeStateClimate('IL',2,0);
      }
      //il 2
    } else if  (this.votes.turn === 14) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('MO',0,1);
      } else {
        this.votes.changeStateClimate('MO',1,0);
      }
      //mo 1
    } else if  (this.votes.turn === 16) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('TX',0,1);
      } else {
        this.votes.changeStateClimate('TX',1,0);
      }
      //tx 1
    } else if  (this.votes.turn === 18) {
      if (this.votes.getUserIsDem()) {
        this.votes.changeStateClimate('CA',0,1);
      } else {
        this.votes.changeStateClimate('CA',1,0);
      }
      //ca 1
    }
  }
}
