/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/data-store/votes.store';
import { MultiPlayerService } from 'src/app/services/multiplayer.service';

@Component({
  selector: 'app-opponent',
  templateUrl: 'opponent.component.html',
  styleUrls: ['opponent.component.css']
})
export class OpponentPage {
  actionText = '';
  actionId = 0;
  actionIcons = [];


  constructor(private router: Router, private multiplayer: MultiPlayerService, private votes: VotesStore, private textService: TextService) {}

  ionViewWillEnter(){
    this.actionText = this.getNextOpponentAction();
  }

  getAllActions() {
    //this.allActions = this.textService.getOpponentActions();
  }

  getNextOpponentAction(): string {
    if (this.votes.isMultiplayer) {
      if (this.votes.lastMultiPlayerMove.type == "Visited") {
        this.handleGroupScoreUpdate(this.votes.lastMultiPlayerMove.states, this.votes.lastMultiPlayerMove.change);
        return 'Your opponent campaigned in ' + this.votes.lastMultiPlayerMove.states[0] + ' where they made a difference of ' + this.votes.lastMultiPlayerMove.change;
      } else if (this.votes.lastMultiPlayerMove.type == "advertise") {
        this.handleGroupScoreUpdate(this.votes.lastMultiPlayerMove.states, this.votes.lastMultiPlayerMove.change);
        let statesString = '';
        let group = this.votes.lastMultiPlayerMove.states;
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
        return 'Your opponent ran advertising in' + statesString + ' where they made a difference of ' + this.votes.lastMultiPlayerMove.change;
      } else if (this.votes.lastMultiPlayerMove.type == "fundraise") {
        return 'You opponent fundraised, they now have ' + this.votes.lastMultiPlayerMove.change + ' funds for advertising.';
      } else {
        //EVENT CARD?
        let group = this.votes.lastMultiPlayerMove.states;
        let statesString = '';

        if (group.length === 0) {
          if (this.votes.isDemocrat) {
            this.votes.changeNationalClimate(-this.votes.lastMultiPlayerMove.change/2, this.votes.lastMultiPlayerMove.change/2);
          } else {
            this.votes.changeNationalClimate(this.votes.lastMultiPlayerMove.change/2, -this.votes.lastMultiPlayerMove.change/2);
          }
          this.actionIcons = [];
          return 'Your opponent drew the following event card: ' + this.votes.lastMultiPlayerMove.type + '. ' + 'This made a difference of ' + this.votes.lastMultiPlayerMove.change + ' in every state.';
        } else {
          this.handleGroupScoreUpdate(this.votes.lastMultiPlayerMove.states, this.votes.lastMultiPlayerMove.change);
          let group = this.votes.lastMultiPlayerMove.states;
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
        }
        return 'Your opponent drew the following event card: ' + this.votes.lastMultiPlayerMove.type + '. ' + 'This made a difference of ' + this.votes.lastMultiPlayerMove.change + ' in ' + statesString;
      }
      //{type, states, change}
    } else {
      //roll 1-5 (weak to strong)
      //1 - affect a dumb state
      //2/3 fundraise
      //4 - campaign wisely (draw the top 10 closest states and pick one)
      //5 - advertise wisely (draw the top 10 closest states and pick one's group)
      const value = Math.floor(Math.random() * 6) + 1;
      if (value <= 2 && (this.votes.round < this.votes.gameLength - 2)) {
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
        if (this.votes.opponentFunds === 0 && (this.votes.round < this.votes.gameLength - 2)) {
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
        const isSuccess = Math.floor(Math.random() * 10);
        //campaign (draw the top 10 closest states and pick one)
        if (Math.floor(Math.random() * 4) === 1) {
          //GIVE A SMALL CHANCE THAT THE AI WILL TARGET THE MOST VALUABLE STATE
          const stateGroup = this.votes.getSortedStates(6);
          let maxVotes = 0;
          let currentPos = 0;
          let maxPos = 0;
          for (const state of stateGroup) {
            if (state.college > maxVotes) {
              maxVotes = state.college;
              maxPos = currentPos;
            }
            currentPos++;
          }
          if (isSuccess > 4) {
            this.handleGroupScoreUpdate([stateGroup[maxPos].abbreviation], 2);
            return 'Your opponent campaigned in ' + stateGroup[maxPos].name + ' where they made a difference of 2 point';
          } else {
            this.handleGroupScoreUpdate([stateGroup[maxPos].abbreviation], 1);
            return 'Your opponent campaigned in ' + stateGroup[maxPos].name + ' where they made a difference of 1 point';
          }
        }
        const statePos = Math.floor(Math.random() * 10);
        const states = this.votes.getSortedStates(10);
        if (isSuccess > 2) {
            this.handleGroupScoreUpdate([states[statePos].abbreviation], 2);
          return 'Your opponent campaigned in ' + states[statePos].name + ' where they made a difference of 2 points';
        } else {
          this.handleGroupScoreUpdate([states[statePos].abbreviation], 1);
          return 'Your opponent campaigned in ' + states[statePos].name + ' where they made a difference of 1 point';
        }
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
    if (this.votes.isMultiplayer) {
      this.multiplayer.sendFinal();
    } else {
      this.router.navigateByUrl('/results');
    }
  }

  goToTab1() {
    this.router.navigateByUrl('tabs/tab1');
  }

  goToEvent() {
    this.router.navigateByUrl('/tabs/tab1/firstevent');
  }

  goToFirstEvent() {
    this.router.navigateByUrl('/tabs/tab1/firstevent');
  }

  nextEvent() {

    this.moveProgressBar();
    if (this.votes.round % 2 === 0) {
      if (!this.votes.lastMoveIsEvent) {
        this.votes.round++;
      }
      this.votes.lastMoveIsEvent = false;
      if (this.votes.round > this.votes.gameLength) {
        this.goToResults();
      } else {
        this.goToEvent();
      }
    } else {
      if (!this.votes.lastMoveIsEvent) {
        this.votes.round++;
      }
      this.votes.lastMoveIsEvent = false;
      if (this.votes.round > this.votes.gameLength) {
        this.goToResults();
      } else {
        this.goToTab1();
      }
    }
    //TODO
  }


  moveProgressBar() {
    document.getElementById('greenbar').style.backgroundImage = 'linear-gradient(to left, rgb(255, 255, 255), #38ff80)';
    if (this.votes.progress > this.votes.gameLength - 1) {
      document.getElementById('finish-icon').style.left = '100%';
      document.getElementById('greenbar').style.backgroundColor = '#30ff30';
      document.getElementById('greenbar').style.backgroundImage = 'none';
      this.votes.progressMessage = 'ELECTION DAY!';
    } else {
      this.votes.progress++;
    }
    document.getElementById('greenbar').style.width = ((this.votes.progress) / this.votes.gameLength) * 100 + '%';
    document.getElementById('whitebar').style.width = ((this.votes.gameLength-this.votes.progress) / this.votes.gameLength) * 100+ '%';
    document.getElementById('progress-icon').style.left = ((this.votes.progress) / this.votes.gameLength) * 100 - 4 + '%';
    if (this.votes.progress > (this.votes.gameLength - 3)) {
      document.getElementById('greenbar').style.backgroundImage = 'linear-gradient(to left, rgb(255, 255, 255), rgb(255, 40, 40))';
      this.votes.progressMessage = 'ELECTION DAY SOON';
    }
    if (this.votes.progress > (this.votes.gameLength - 2)) {
      document.getElementById('finish-icon').style.left = '100%';
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
