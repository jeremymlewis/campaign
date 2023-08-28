/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/stores/votes.store';

@Component({
  selector: 'app-opponent',
  templateUrl: 'opponent.component.html',
  styleUrls: ['opponent.component.css']
})
export class OpponentPage implements OnInit {
  actionText = '';
  actionId = 0;

  constructor(private router: Router, private toastController: ToastController, private votes: VotesStore, private textService: TextService) {}

  ngOnInit() {
    this.actionText = this.getNextOpponentAction();
  }

  getAllActions() {
    //this.allActions = this.textService.getOpponentActions();
  }

  getNextOpponentAction(): string {
    //roll 1-5 (weak to strong)
    //1 - affect a dumb state
    //2/3 fundraise
    //4 - campaign wisely (draw the top 10 closest states and pick one)
    //5 - advertise wisely (draw the top 10 closest states and pick one's group)
    const value = Math.floor(Math.random() * 6) + 1;
    if (value <= 2) {
      this.votes.opponentFunds += 1;
      return 'Your opponent ran fundraising and earned $10 million';
      //fundraise
    } else if (value <= 4) {
      //advertise (or fundraise if needed)
      if (this.votes.opponentFunds === 0) {
        this.votes.opponentFunds += 2;
        return 'Your opponent ran fundraising and earned $20 million';
      } else {
        this.votes.opponentFunds -= 1;
        const statePos = Math.floor(Math.random() * 3);
        const group: string[] = this.votes.getSortedGroups(statePos);
        let statesString = '';
        if (group.length === 1) {
          statesString = ' ' + group[0];
        } else {
          for (const state of group) {
            statesString += ' ';
            statesString += state;
            statesString += ',';
          }
          statesString = statesString.substring(0, statesString.length - 1);
          statesString = statesString.slice(0, statesString.length - 3) + ' and' + statesString.slice(statesString.length - 3);
        }
        this.handleGroupScoreUpdate(group, 1);
        return 'Your opponent ran advertising in' + statesString + ' where they made a difference of 1 point';
     }
    } else {
      //campaign (draw the top 6 closest states and pick one)
      const statePos = Math.floor(Math.random() * 6);
      const states = this.votes.getSortedStates(6);
      this.handleGroupScoreUpdate([states[statePos].abbreviation], 2);
      return 'Your opponent campaigned in ' + states[statePos].name + ' where they made a difference of 2 points';
    }

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

  goToFirstEvent() {
    this.router.navigateByUrl('/tabs/tab1/firstevent');
  }

  nextEvent() {
    this.votes.turn++;
    if (this.votes.turn % 2 === 0) {
      this.votes.round++;
      if (this.votes.round > 10) {
        this.goToResults();
      } else if (this.votes.round === 2) {
        this.goToFirstEvent();
        console.log('firstEvent');
      } else {
        this.goToEvent();
      }

    } else {
      this.goToTab1();
    }
  }

  handleGroupScoreUpdate(group: string[], sway: number) {
    if (this.votes.getUserIsDem()) {
      for (const state of group) {
        this.votes.changeStateClimate(state,-sway/2,sway/2);
      }
    } else {
      for (const state of group) {
        this.votes.changeStateClimate(state,sway/2,-sway/2);
      }
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
