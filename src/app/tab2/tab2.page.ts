import { Component } from '@angular/core';
import { State } from '../stores/State';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  decidedStates: State[] = [];
  decidedStatesRight: State[]= [];
  decidedStatesLeft: State[]= [];
  rightLeanStates: State[]= [];
  leftLeanStates: State[]= [];
  tossUpStatesLeft: State[]= [];
  tossUpStatesRight: State[]= [];
  tossUpStates: State[]= [];
  decidedRed: number = 0;
  decidedBlue: number = 0;
  leanRed: number = 0;
  leanBlue: number = 0;
  tossUp: number = 0;

  constructor(public store: VotesStore) {
    this.updateStateLists();
  }

  updateL() {
    this.store.changeStateClimate('UT', 0, -5)
    this.store.changeStateClimate('CA', 0, -5)
    this.store.changeStateClimate('VA', 0, -5)
    this.store.changeStateClimate('PA', 0, -5)
    this.store.changeStateClimate('FL', 0, -5)
    this.store.changeStateClimate('OH', 0, -5)
    this.updateStateLists();
  }

  updateR() {
    this.store.changeStateClimate('UT', 0, 5)
    this.store.changeStateClimate('CA', 0, 5)
    this.store.changeStateClimate('VA', 0, 5)
    this.store.changeStateClimate('PA', 0, 5)
    this.store.changeStateClimate('FL', 0, 5)
    this.store.changeStateClimate('OH', 0, 5)

    this.updateStateLists();

  }

  updateStateLists() {
    this.decidedStates = [];
    this.decidedStatesRight = [];
    this.decidedStatesLeft = [];
    this.rightLeanStates = [];
    this.leftLeanStates = [];
    this.tossUpStatesLeft = [];
    this.tossUpStatesRight = [];
    this.tossUpStates = [];
    this.decidedRed = 0;
    this.decidedBlue = 0;
    this.leanRed = 0;
    this.leanBlue= 0;
    this.tossUp = 0;
    this.decidedStates = this.store.getDecidedStates();
    for (const state of this.decidedStates) {
      if (state.leansDem > 0) {
        this.decidedStatesLeft.push(state);
        this.decidedBlue += state.college;
      } else {
        this.decidedStatesRight.push(state);
        this.decidedRed += state.college;
      }
    }
    this.leftLeanStates = this.store.getLeftLeanStates();
    for (const state of this.leftLeanStates) {
      this.leanBlue += state.college;
    }
    this.rightLeanStates = this.store.getRightLeanStates();
    for (const state of this.rightLeanStates) {
      this.leanRed += state.college;
    }
    this.tossUpStatesLeft = this.store.getTossUpsLeft();
    this.tossUpStates = this.store.getTossUps();
    this.tossUpStatesRight = this.store.getTossUpsRight();
    for (const state of this.tossUpStatesRight) {
      this.tossUp += state.college;
    }
    for (const state of this.tossUpStatesLeft) {
      this.tossUp += state.college;
    }
    for (const state of this.tossUpStates) {
      this.tossUp += state.college;
    }
  }

}
