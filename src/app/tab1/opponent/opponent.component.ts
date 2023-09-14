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
  actionIcons = [];

  constructor(private router: Router, private toastController: ToastController, private votes: VotesStore, private textService: TextService) {}

  ngOnInit() {
    console.log("ngOnInit");
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
      if (this.votes.opponentFunds < 3) {
        this.votes.opponentFunds += 1;
        return 'Your opponent ran fundraising and earned $10 million';
      } else {
        this.votes.opponentFunds -= 1;
        const statePos = Math.floor(Math.random() * 12);
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
        const isSuccess = Math.floor(Math.random() * 10);
        if (isSuccess > 2) {
          this.handleGroupScoreUpdate(group, 1);
          return 'Your opponent ran advertising in' + statesString + ' where they made a difference of 1 point';
        } else {
          this.handleGroupScoreUpdate(group, 0);
          return 'Your opponent ran advertising in' + statesString + ' where they made no difference';
        }
      }
      //fundraise
    } else if (value <= 4) {
      //advertise (or fundraise if needed)
      if (this.votes.opponentFunds === 0) {
        this.votes.opponentFunds += 2;
        return 'Your opponent ran fundraising and earned $20 million';
      } else {
        this.votes.opponentFunds -= 1;
        const statePos = Math.floor(Math.random() * 10);
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
      //campaign (draw the top 10 closest states and pick one)
      const statePos = Math.floor(Math.random() * 10);
      const states = this.votes.getSortedStates(10);
      const isSuccess = Math.floor(Math.random() * 10);
      if (isSuccess > 2) {
          this.handleGroupScoreUpdate([states[statePos].abbreviation], 2);
        return 'Your opponent campaigned in ' + states[statePos].name + ' where they made a difference of 2 points';
      } else {
        this.handleGroupScoreUpdate([states[statePos].abbreviation], 1);
        return 'Your opponent campaigned in ' + states[statePos].name + ' where they made a difference of 1 point';
      }
    }

  }

  // addActionIconByName(state: string, change: number, isTowardBlue: boolean) {
  //   const iconPath = this.votes.getStateIconByName(state);
  //   this.actionIcons.push({
  //     path: iconPath,
  //     change,
  //     isTowardBlue
  //   });
  // }

  addActionIconByAbrev(abbreviation: string, change: number, isTowardBlue: boolean) {
    const iconPath = this.votes.getStateIconByAbrev(abbreviation);
    this.actionIcons.push({
      path: 'assets/images/states/' + iconPath,
      change,
      isTowardBlue
    });
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
    this.actionIcons = [];
    if (this.votes.getUserIsDem()) {
      for (const state of group) {
        this.addActionIconByAbrev(state, sway, false);
        this.votes.changeStateClimate(state,-sway/2,sway/2);
      }
    } else {
      for (const state of group) {
        this.addActionIconByAbrev(state, sway, true);
        this.votes.changeStateClimate(state,sway/2,-sway/2);
      }
    }
  }

}
