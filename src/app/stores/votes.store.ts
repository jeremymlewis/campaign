/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from './state';
import { Storage } from '@ionic/storage-angular';



@Injectable({providedIn: 'root'})
export class VotesStore {
  isDemocrat = true;
  isThird = false;
  thirdName = '';
  background = {}; //TODO MAKE A TYPED OBJECT WITH A FEW MEMBERS
  thirdPartyName= '';
  public opponentFunds = 0;
  public funds = 0;
  public round = 1;
  public turn = 0;

  Alabama: State = new State('Alabama','AL',9, 32,49);
  Alaska: State = new State('Alaska','AK',3,33,48);
  Arizona: State = new State('Arizona','AZ',11,40,41);
  Arkansas: State = new State('Arkansas','AR',6,32,49);
  California: State = new State('California','CA',54,52,30);
  Colorado: State = new State('Colorado','CO',10,42,39);
  Connecticut: State = new State('Connecticut','CT',7,46,35);
  Delaware: State = new State('Delaware','DE',3,45,35);
  DC: State = new State('D.C.','DC',3, 75, 7);
  Florida: State = new State('Florida','FL',30,39,41);
  Georgia: State = new State('Georgia','GA',16,39,42);
  Hawaii: State = new State('Hawaii','HI',4,53,28);
  Idaho: State = new State('Idaho','ID',4,30,51);
  Illinois: State = new State('Illinois','IL',19,48,34);
  Indiana: State = new State('Indiana','IN',11,30,51);
  Iowa: State = new State('Iowa','IA',6,39,43);
  Kansas: State = new State('Kansas','KS',6,32,49);
  Kentucky: State = new State('Kentucky','KY',8,30,51);
  Louisiana: State = new State('Louisiana','LA',8,32,49);
  Maine: State = new State('Maine','ME',4,43,39);
  Maryland: State = new State('Maryland','MD',10,51,31);
  Massachusetts: State = new State('Massachusetts','MA',11,52,30);
  Michigan: State = new State('Michigan','MI',15,42,39);
  Minnesota: State = new State('Minnesota','MN',10,44,39);
  Mississippi: State = new State('Mississippi','MS',6,34,48);
  Missouri: State = new State('Missouri','MO',10,34,46);
  Montana: State = new State('Montana','MT',4,34,47);
  Nebraska: State = new State('Nebraska','NE',5,32,49);
  Nevada: State = new State('Nevada','NV',6,40,41);
  NewHampshire: State = new State('New Hampshire','NH',4,42,39);
  NewJersey: State = new State('New Jersey','NJ',14,48,34);
  NewMexico: State = new State('New Mexico','NM',5,44,37);
  NewYork: State = new State('New York','NY',28,52,30);
  NorthCarolina: State = new State('North Carolina','NC',16,40,42);
  NorthDakota: State = new State('North Dakota','ND',3,31,51);
  Ohio: State = new State('Ohio','OH',17,38,43);
  Oklahoma: State = new State('Oklahoma','OK',7,30,51);
  Oregon: State = new State('Oregon','OR',8,45,37);
  Pennsylvania: State = new State('Pennsylvania','PA',19,42,40);
  RhodeIsland: State = new State('Rhode Island','RI',4,50,32);
  SouthCarolina: State = new State('South Carolina','SC',9,35,46);
  SouthDakota: State = new State('South Dakota','SD',3,31,51);
  Tennessee: State = new State('Tennessee','TN',11,32,49);
  Texas: State = new State('Texas','TX',40,37,44);
  Utah: State = new State('Utah','UT',6,32,49);
  Vermont: State = new State('Vermont','VT',3,52,30);
  Virginia: State = new State('Virginia','VA',13,42,39);
  Washington: State = new State('Washington','WA',12,46,35);
  WestVirginia: State = new State('West Virginia','WV',4,30,51);
  Wisconsin: State = new State('Wisconsin','WI',10,41,39);
  Wyoming: State = new State('Wyoming','WY',3,29,53);
  states: State[] = [];
  NationalClimate = 0;
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
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
    ];
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  public async addGameStats(isWin: boolean, isDem: boolean, votes: number) {
    const plays = await this.getLocalStorage('plays');
    const wins = await this.getLocalStorage('wins');
    const demWins = await this.getLocalStorage('demWins');
    const repWins = await this.getLocalStorage('repWind');
    const highVotes = await this.getLocalStorage('highVotes');
    this.setLocalStorage('plays', Number(plays) + 1);
    if (votes > Number(highVotes)) {
      this.setLocalStorage('highVotes', votes);
    }
    if (isWin) {
      this.setLocalStorage('wins', Number(wins) + 1);
      if (isDem) {
        this.setLocalStorage('demWins', Number(demWins) + 1);
      } else {
        this.setLocalStorage('repWins', Number(repWins) + 1);
      }
    }
  }

  public setLocalStorage(key: string, value: any) {
    // eslint-disable-next-line no-underscore-dangle
    this._storage?.set(key, value);
  }

  public async getLocalStorage(key: string) {
    // eslint-disable-next-line no-underscore-dangle
    return await this._storage?.get(key);
  }

  getUserIsThird() {
    return this.isThird;
  }

  setUserIsThird(isThird: boolean) {
    this.isThird = isThird;
    for (const state of this.states) {
      state.thirdPercent = 2;
    }
  }

  setBackground(background) {
    this.background = background;
  }

  setThirdPartyName(name: string) {
    this.thirdName = name;
  }

  getThirdPartyName() {
    return this.thirdName;
  }

  getUserIsDem() {
    return this.isDemocrat;
  }

  setUserIsDem(isDem: boolean) {
    this.isDemocrat = isDem;
    for (const state of this.states) {
      if (state.leansDem > 17 && !isDem) {
        state.protected = '*';
      } else if (state.leansRep > 14 && isDem) {
        state.protected = '*';
      }
    }
  }

  getAllStates() {
    return this.states;
  }

  getSortedStates(count: number = 51): State[] {
    const closestStates = [];
    this.states.forEach(state => {
      closestStates.push(state);
    });
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    closestStates.sort(function(a, b){return Math.abs(a.demPercent-a.repPercent) - Math.abs(b.demPercent-b.repPercent);});

    return closestStates.slice(0, count);
  }

  getSortedGroups(pos: number = 0): string[] {
    const states = this.getSortedStates();
    if (states[pos].abbreviation === 'HI' || states[pos].abbreviation === 'CA' ||
        states[pos].abbreviation === 'WA' || states[pos].abbreviation === 'OR' ) {
          return ['HI','CA','WA','OR'];
    } else if (states[pos].abbreviation === 'IL' || states[pos].abbreviation === 'MN') {
          return ['IL','MN'];
    } else if (states[pos].abbreviation === 'NM' || states[pos].abbreviation === 'CO' ||
    states[pos].abbreviation === 'NV' || states[pos].abbreviation === 'AZ' ) {
      return ['NM','CO','NV','AZ'];
    } else if (states[pos].abbreviation === 'ME' || states[pos].abbreviation === 'NH' ||
    states[pos].abbreviation === 'VA' || states[pos].abbreviation === 'PA' ) {
      return['ME','NH','VA','PA'];
    } else if (states[pos].abbreviation === 'WI' || states[pos].abbreviation === 'IA' ||
    states[pos].abbreviation === 'MI' || states[pos].abbreviation === 'OH' ) {
      return ['WI','IA','MI','OH'];
    } else if (states[pos].abbreviation === 'FL' || states[pos].abbreviation === 'NC' ||
    states[pos].abbreviation === 'GA' ) {
      return ['FL','NC','GA'];
    } else if (states[pos].abbreviation === 'TX') {
      return ['TX'];
    } else if (states[pos].abbreviation === 'SC' || states[pos].abbreviation === 'MO' ||
              states[pos].abbreviation === 'IN' || states[pos].abbreviation === 'MT' ||
              states[pos].abbreviation === 'AK' || states[pos].abbreviation === 'MS' ||
              states[pos].abbreviation === 'LA') {
      return ['SC','MO','IN','MT','MS','AK','LA'];
    } else {
      pos += 1;
      if (pos > 49) {
        return [];
      }
      return this.getSortedGroups(pos);
    }
  }

  getCurrentScore() {
    if (this.isThird) {
      return 0;//TODO3
    }
    let demScore = 0;
    let repScore = 0;
    for (const state of this.states) {
      if (state.leansDem > 0) {
        demScore += state.college;
      }
      if (state.leansRep > 0) {
        repScore += state.college;
      }
    }
    if (this.isDemocrat) {
      return repScore - 270;
    } else {
      return demScore - 270;
    }
  }

  getDecidedStates() {
    const decidedStates = [];
    for (const state of this.states) {
      if (state.decided) {
        decidedStates.push(state);
      }
    }
    return decidedStates;
  }

  getSafeStates() {
    const safeStates = [];
    for (const state of this.states) {
      if (state.leansDem >= 14 || state.leansRep >= 14 ) {
        safeStates.push(state);
      }
    }
    return safeStates;
  }

  getLeftLeanStates() {
    const leftLeanStates = [];
    for (const state of this.states) {
      if (state.leansDem >= 5 && state.leansDem < 14) {
        leftLeanStates.push(state);
      }
    }
    return leftLeanStates;
  }

  getRightLeanStates() {
    const rightLeanStates = [];
    for (const state of this.states) {
      if (state.leansRep >= 5 && state.leansRep < 14) {
        rightLeanStates.push(state);
      }
    }
    return rightLeanStates;
  }

  getTossUpsLeft() {
    const undecidedStates = [];
    for (const state of this.states) {
      if (state.leansDem > 0 && state.leansDem < 5) {
        undecidedStates.push(state);
      }
    }
    return undecidedStates;
  }

  getTossUps() {
    const undecidedStates = [];
    for (const state of this.states) {
      if (state.leansDem === 0) {
        undecidedStates.push(state);
      }
    }
    return undecidedStates;
  }

  getTossUpsRight() {
    const undecidedStates = [];
    for (const state of this.states) {
      if (state.leansRep > 0 && state.leansRep < 5) {
        undecidedStates.push(state);
      }
    }
    return undecidedStates;
  }


  changeNationalClimate(changeLeft: number, changeRight: number) {
    this.NationalClimate += changeRight;
    this.NationalClimate -= changeLeft;
    for (const state of this.states) {
      state.demPercent += changeLeft;
      state.repPercent += changeRight;
      state.leansDem = state.demPercent-state.repPercent;
      state.leansRep = state.repPercent-state.demPercent;
    }
  }

  changeStateClimate(abbreviaion: string, changeLeft: number, changeRight: number) {
    for (const state of this.states) {
      if (state.abbreviation === abbreviaion) {
        state.demPercent += changeLeft;
        state.repPercent += changeRight;
        state.leansDem = state.demPercent-state.repPercent;
        state.leansRep = state.repPercent-state.demPercent;
      }
    }
  }

  neutralizeStateClimate(abbreviaion: string) {
    for (const state of this.states) {
      if (state.abbreviation === abbreviaion) {
        state.decided = false;
        state.leansDem = 0;
        state.demPercent = 40;
        state.repPercent = 40;
        state.leansRep = 0;
      }
    }
  }

  getFinalRed() {
    let red = 0;
    for (const state of this.states) {
      if (state.repPercent > state.demPercent) {
        red += state.college;
        state.decided = true;
      }
      if (state.repPercent === state.demPercent && this.NationalClimate >= 0) {
        this.changeStateClimate(state.abbreviation, -1,1);
        red += state.college;
        state.decided = true;
      }
    }
    return red;
  }

  getFinalBlue() {
    let blue = 0;
    for (const state of this.states) {
      if (state.repPercent < state.demPercent) {
        blue += state.college;
        state.decided = true;
      }
      if (state.repPercent === state.demPercent && this.NationalClimate < 0) {
        this.changeStateClimate(state.abbreviation, 1,-1);
        blue += state.college;
        state.decided = true;
      }
    }
    return blue;
  }

  getUserWon() {
    if ( this.getFinalBlue() === 269 ) {
      const closeStates = this.getSortedStates(10);
      let pos = 0;
      while (this.getFinalBlue() === 269) {
        if (this.isDemocrat) {
          if (closeStates[pos].repPercent - closeStates[pos].demPercent > 0) {
            this.changeStateClimate(closeStates[pos].abbreviation, 1,-1);
          } else {
            pos ++;
          }
        }
        if (!this.isDemocrat) {
          if (closeStates[pos].demPercent - closeStates[pos].repPercent > 0) {
            this.changeStateClimate(closeStates[pos].abbreviation, -1,1);
          } else {
            pos ++;
          }
        }
      }
    }

    //TODO3
    if (this.getFinalBlue() > 269 && this.isDemocrat) {
      return true;
    } else if (this.getFinalBlue() > 269 && !this.isDemocrat) {
      return false;
    }
    if (this.getFinalRed() > 269 && !this.isDemocrat) {
      return true;
    } else {
      return false;
    }

  }

  reset() {
    this.isDemocrat = true;
    this.isThird = false;
    this.funds = 0;
    this.opponentFunds = 0;
    this.round = 1;
    this.turn = 0;
    this.NationalClimate = 0;

    this.Alabama = new State('Alabama','AL',9, 32,49);
    this.Alaska = new State('Alaska','AK',3,33,48);
    this.Arizona = new State('Arizona','AZ',11,40,41);
    this.Arkansas = new State('Arkansas','AR',6,32,49);
    this.California = new State('California','CA',54,52,30);
    this.Colorado = new State('Colorado','CO',10,42,39);
    this.Connecticut = new State('Connecticut','CT',7,46,35);
    this.Delaware = new State('Delaware','DE',3,45,35);
    this.DC = new State('D.C.','DC',3, 75, 7);
    this.Florida = new State('Florida','FL',30,39,41);
    this.Georgia = new State('Georgia','GA',16,39,42);
    this.Hawaii = new State('Hawaii','HI',4,53,28);
    this.Idaho = new State('Idaho','ID',4,30,51);
    this.Illinois = new State('Illinois','IL',19,48,34);
    this.Indiana = new State('Indiana','IN',11,30,51);
    this.Iowa = new State('Iowa','IA',6,39,43);
    this.Kansas = new State('Kansas','KS',6,32,49);
    this.Kentucky = new State('Kentucky','KY',8,30,51);
    this.Louisiana = new State('Louisiana','LA',8,32,49);
    this.Maine = new State('Maine','ME',4,43,39);
    this.Maryland = new State('Maryland','MD',10,51,31);
    this.Massachusetts = new State('Massachusetts','MA',11,52,30);
    this.Michigan = new State('Michigan','MI',15,42,39);
    this.Minnesota = new State('Minnesota','MN',10,44,39);
    this.Mississippi = new State('Mississippi','MS',6,34,48);
    this.Missouri = new State('Missouri','MO',10,34,46);
    this.Montana = new State('Montana','MT',4,34,47);
    this.Nebraska = new State('Nebraska','NE',5,32,49);
    this.Nevada = new State('Nevada','NV',6,40,41);
    this.NewHampshire = new State('New Hampshire','NH',4,42,39);
    this.NewJersey = new State('New Jersey','NJ',14,48,34);
    this.NewMexico = new State('New Mexico','NM',5,44,37);
    this.NewYork = new State('New York','NY',28,52,30);
    this.NorthCarolina = new State('North Carolina','NC',16,40,42);
    this.NorthDakota = new State('North Dakota','ND',3,31,51);
    this.Ohio = new State('Ohio','OH',17,38,43);
    this.Oklahoma = new State('Oklahoma','OK',7,30,51);
    this.Oregon = new State('Oregon','OR',8,45,37);
    this.Pennsylvania = new State('Pennsylvania','PA',19,42,40);
    this.RhodeIsland = new State('Rhode Island','RI',4,50,32);
    this.SouthCarolina = new State('South Carolina','SC',9,35,46);
    this.SouthDakota = new State('South Dakota','SD',3,31,51);
    this.Tennessee = new State('Tennessee','TN',11,32,49);
    this.Texas = new State('Texas','TX',40,37,44);
    this.Utah = new State('Utah','UT',6,32,49);
    this.Vermont = new State('Vermont','VT',3,52,30);
    this.Virginia = new State('Virginia','VA',13,42,39);
    this.Washington = new State('Washington','WA',12,46,35);
    this.WestVirginia = new State('West Virginia','WV',4,30,51);
    this.Wisconsin = new State('Wisconsin','WI',10,41,39);
    this.Wyoming = new State('Wyoming','WY',3,29,53);
    this.states = [];
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
    ];
  }


  public getStateIconByAbrev(abbreviation: string): string {
    abbreviation = abbreviation.toUpperCase();
    for (const state of this.states) {
      if (state.abbreviation === abbreviation) {
        const hyphenatedName = state.name.replace(/ /g, '-');
        return state.abbreviation + '-' + hyphenatedName + '.png';
      }
    }
  }

  public getStateIconByName(name: string): string {
    for (const state of this.states) {
      if (state.name === name) {
        const hyphenatedName = state.name.replace(/ /g, '-');
        return state.abbreviation + '-' + hyphenatedName + '.png';
      }
    }
  }





}
