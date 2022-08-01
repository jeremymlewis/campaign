import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from './State';
//import { Storage } from '@ionic/storage';



@Injectable({providedIn: 'root'})
export class VotesStore {
  Alabama: State = new State('AL',9, 32,49,true)
  Alaska: State = new State('AK',3,33,48)
  Arizona: State = new State('AZ',11,40,41)
  Arkansas: State = new State('AR',6,32,49)
  California: State = new State('CA',55,52,30)
  Colorado: State = new State('CO',9,42,39)
  Connecticut: State = new State('CT',7,46,35,true)
  Delaware: State = new State('DE',3,45,35,true)
  DC: State = new State('DC',3, 75, 7, true)
  Florida: State = new State('FL',29,39,41)
  Georgia: State = new State('GA',16,39,42)
  Hawaii: State = new State('HI',4,53,28)
  Idaho: State = new State('ID',4,30,51,true)
  Illinois: State = new State('IL',20,48,34)
  Indiana: State = new State('IN',4,30,51,true)
  Iowa: State = new State('IA',6,39,43)
  Kansas: State = new State('KA',6,32,49,true)
  Kentucky: State = new State('KY',8,30,51,true)
  Louisiana: State = new State('LA',8,32,49)
  Maine: State = new State('ME',4,43,39)
  Maryland: State = new State('MD',10,51,31,true)
  Massachusetts: State = new State('MA',11,52,30,true)
  Michigan: State = new State('MI',16,42,39)
  Minnesota: State = new State('MN',10,44,39)
  Mississippi: State = new State('MS',6,34,48)
  Missouri: State = new State('MO',10,34,46)
  Montana: State = new State('MT',3,34,47)
  Nebraska: State = new State('NE',5,32,49,true)
  Nevada: State = new State('NV',6,41,40)
  NewHampshire: State = new State('NH',4,42,39)
  NewJersey: State = new State('NJ',14,48,34,true)
  NewMexico: State = new State('NM',5,44,37)
  NewYork: State = new State('NY',29,52,30,true)
  NorthCarolina: State = new State('NC',15,40,42)
  NorthDakota: State = new State('ND',3,31,51,true)
  Ohio: State = new State('OH',18,38,43)
  Oklahoma: State = new State('OK',7,30,51,true)
  Oregon: State = new State('OR',7,45,37)
  Pennsylvania: State = new State('PA',20,42,40)
  RhodeIsland: State = new State('RI',4,50,32,true)
  SouthCarolina: State = new State('SC',9,35,46)
  SouthDakota: State = new State('SD',3,31,51,true)
  Tennessee: State = new State('TN',11,32,49,true)
  Texas: State = new State('TX',38,37,44)
  Utah: State = new State('UT',6,32,49)
  Vermont: State = new State('VT',3,52,30,true)
  Virginia: State = new State('VA',13,42,39)
  Washington: State = new State('WA',12,46,35)
  WestVirginia: State = new State('WV',5,30,51,true)
  Wisconsin: State = new State('WI',10,41,39)
  Wyoming: State = new State('WY',3,29,53,true)
  states: State[] = []
  NationalClimate: number = 0;
  constructor(/*private storage: Storage*/) {
    this.states = [
      this.Alabama,
      this.Alaska,
      this.Arizona,
      this.Arkansas,
      this.California,
      this.Colorado,
      this.Connecticut,
      this.Delaware,
      this.DC,
      this.Florida,
      this.Georgia,
      this.Hawaii,
      this.Idaho,
      this.Illinois,
      this.Indiana,
      this.Iowa,
      this.Kansas,
      this.Kentucky,
      this.Louisiana,
      this.Maine,
      this.Maryland,
      this.Massachusetts,
      this.Michigan,
      this.Minnesota,
      this.Mississippi,
      this.Missouri,
      this.Montana,
      this.Nebraska,
      this.Nevada,
      this.NewHampshire,
      this.NewJersey,
      this.NewMexico,
      this.NewYork,
      this.NorthCarolina,
      this.NorthDakota,
      this.Ohio,
      this.Oklahoma,
      this.Oregon,
      this.Pennsylvania,
      this.RhodeIsland,
      this.SouthCarolina,
      this.SouthDakota,
      this.Tennessee,
      this.Texas,
      this.Utah,
      this.Vermont,
      this.Virginia,
      this.Washington,
      this.WestVirginia,
      this.Wisconsin,
      this.Wyoming
    ]
  }


  getAllStates() {
    return this.states;
  }

  getDecidedStates() {
    let decidedStates = [];
    for (const state of this.states) {
      if (state.decided) {
        decidedStates.push(state);
      }
    }
    return decidedStates;
  }

  getLeftLeanStates() {
    let leftLeanStates = [];
    for (const state of this.states) {
      if (state.leansDem >= 5 && !state.decided) {
        leftLeanStates.push(state);
      }
    }
    return leftLeanStates;
  }

  getRightLeanStates() {
    let rightLeanStates = [];
    for (const state of this.states) {
      if (state.leansRep >= 5 && !state.decided) {
        rightLeanStates.push(state);
      }
    }
    return rightLeanStates;
  }

  getTossUpsLeft() {
    let undecidedStates = [];
    for (const state of this.states) {
      if (state.leansDem > 0 && state.leansDem < 5) {
        undecidedStates.push(state);
      }
    }
    return undecidedStates;
  }

  getTossUps() {
    let undecidedStates = [];
    for (const state of this.states) {
      if (state.leansDem == 0) {
        undecidedStates.push(state);
      }
    }
    return undecidedStates;
  }

  getTossUpsRight() {
    let undecidedStates = [];
    for (const state of this.states) {
      if (state.leansRep > 0 && state.leansRep < 5) {
        undecidedStates.push(state);
      }
    }
    return undecidedStates;
  }


  changeNationalClimate(change: number) {
    this.NationalClimate += change;
    //TODO change each States level.
  }

  changeStateClimate(abbreviaion: string, changeLeft: number, changeRight: number) {
    for (const state of this.states) {
      if (state.abbreviation == abbreviaion) {
        state.demPercent += changeLeft;
        state.repPercent += changeRight;
        state.leansDem = state.demPercent-state.repPercent;
        state.leansRep = state.repPercent-state.demPercent;      }
    }
  }





}
