/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from './state';
import { Storage } from '@ionic/storage-angular';



@Injectable({providedIn: 'root'})
export class VotesStore {
  neededToWin = 270;
  actionPending = false;
  unlockedOccuredThisRound = false;
  scandals = 0;
  progressMessage = '';
  progress = 0;
  isDemocrat = true;
  isThird = false;
  thirdName = '';
  background = {}; //TODO MAKE A TYPED OBJECT WITH A FEW MEMBERS
  thirdPartyName= '';
  public opponentFunds = 0;
  public funds = 0;
  public round = 1;
  public gameLength = 16;
  public turn = 0;

  Alabama: State = new State('Alabama','AL',9, 32,49);
  Alaska: State = new State('Alaska','AK',3,33,48);
  Arizona: State = new State('Arizona','AZ',11,40,41);
  Arkansas: State = new State('Arkansas','AR',6,32,49);
  California: State = new State('California','CA',54,52,30);
  Colorado: State = new State('Colorado','CO',10,42,39);
  Connecticut: State = new State('Connecticut','CT',7,46,35);
  Delaware: State = new State('Delaware','DE',3,45,35);
  DC: State = new State('DC','DC',3, 75, 7);
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
  visitedStates = {};
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
    let plays = await this.getLocalStorage('plays');
    let wins = await this.getLocalStorage('wins');
    let demWins = await this.getLocalStorage('demWins');
    let repWins = await this.getLocalStorage('repWins');
    let highVotes = await this.getLocalStorage('highVotes');

    wins = Number(wins);
    demWins = Number(demWins);
    repWins = Number(repWins);
    highVotes = Number(highVotes);
    plays = Number(plays);
    if (Number.isNaN(wins)) {
      wins = 0;
    }
    if (Number.isNaN(plays)) {
      plays = 0;
    }
    if (Number.isNaN(demWins)) {
      demWins = 0;
    }
    if (Number.isNaN(repWins)) {
      repWins = 0;
    }
    if (Number.isNaN(highVotes)) {
      highVotes = 0;
    }
    if (wins !== demWins + repWins) {
      wins = demWins + repWins;
    }

    this.setLocalStorage('plays', Number(plays) + 1);
    if (votes > Number(highVotes)) {
      //
      this.setLocalStorage('highVotes', votes);
    }
    if (votes > 399) {
      this.unlockRecord('record13');
    }
    if (votes === 270) {
      this.unlockRecord('record11');
    }
    if (isWin) {
      if (wins > 9) {
        this.unlockRecord('record8');
      }
      if (plays > 59) {
        this.unlockRecord('record12');
      }
      this.unlockRecord('record1');
      this.setLocalStorage('wins', wins + 1);
      if (isDem) {
        this.setLocalStorage('demWins', demWins + 1);
        if (this.Ohio.leansDem < this.Ohio.leansRep) {
          this.unlockRecord('record7');
        }
        if (this.Texas.leansDem > this.Texas.leansRep) {
          this.unlockRecord('record10');
        }
        if (repWins > 0) {
          this.unlockRecord('record3');
        }
      } else {
        this.setLocalStorage('repWins', repWins + 1);
        if (this.Ohio.leansDem > this.Ohio.leansRep) {
          this.unlockRecord('record7');
        }
        if (this.California.leansDem < this.California.leansRep) {
          this.unlockRecord('record17');
        }
        if (demWins > 0) {
          this.unlockRecord('record3');
        }
      }
    } else {
      this.unlockRecord('record2');
      if (plays - demWins - repWins > 9) {
        this.unlockRecord('record15');
      }
    }
    if (Object.keys(this.visitedStates).length === 0) {
      this.unlockRecord('record4');
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

  async unlockRecord(recordId: string) {
    const unlocked = await this.getLocalStorage(recordId);
    if (!unlocked) {
      this.unlockedOccuredThisRound = true;
    }
    this.setLocalStorage(recordId, 'unlocked');
  }

  stateVisited(state: State) {
    this.visitedStates[state.abbreviation] = this.visitedStates[state.abbreviation] ? this.visitedStates[state.abbreviation] + 1 : 1;
    if (this.visitedStates[state.abbreviation] > 4) {
      this.unlockRecord('record9');
    }
  }

  scandalDrawn() {
    this.scandals++;
    if (this.scandals > 1) {
      this.unlockRecord('record5');
    }
  }



  finalizeVotes() {
    for (const state of this.states) {
      const value = Math.floor(Math.random() * 11) + 1;
      const value2 = Math.floor(Math.random() * 100) + 1;
      let adjustment = 0;
      if (value2 > 65) { //give a boost to the player
        adjustment += (value/10);
      } else { //give boost to opponent
        adjustment -= (value/10);
      }
      if (this.isDemocrat) {
        this.changeStateClimate(state.abbreviation, adjustment, 0);
      } else {
        this.changeStateClimate(state.abbreviation, 0, adjustment);
      }
      if (state.leansDem === state.leansRep) {
        if (this.isDemocrat) {
          this.changeStateClimate(state.abbreviation, adjustment, 0);
        } else {
          this.changeStateClimate(state.abbreviation, 0, adjustment);
        }
      }
    }
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
          if (this.Hawaii) {
            return ['HI','CA','WA','OR'];
          } else {
            return ['CA','WA','OR'];
          }
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
      if (this.Alaska) {
        return ['TX', 'AK'];
      } else {
        return ['TX'];
      }
    } else if (states[pos].abbreviation === 'SC' || states[pos].abbreviation === 'MO' ||
               states[pos].abbreviation === 'IN' || states[pos].abbreviation === 'MT'  ||
               states[pos].abbreviation === 'MS' || states[pos].abbreviation === 'LA') {
      return ['SC','MO','IN','MT','MS','LA'];
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
      return repScore - this.neededToWin;
    } else {
      return demScore - this.neededToWin;
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
      if (state.leansDem >= 12 || state.leansRep >= 12 ) {
        safeStates.push(state);
      }
    }
    return safeStates;
  }

  getLeftLeanStates() {
    const leftLeanStates = [];
    for (const state of this.states) {
      if (state.leansDem >= 5 && state.leansDem < 12) {
        leftLeanStates.push(state);
      }
    }
    return leftLeanStates;
  }

  getRightLeanStates() {
    const rightLeanStates = [];
    for (const state of this.states) {
      if (state.leansRep >= 5 && state.leansRep < 12) {
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

   // https://stackoverflow.com/questions/48083353/i-want-to-know-how-to-shuffle-an-array-in-typescript
   // Borrowed as a Helper Method
  shuffle(array: State[]): State[] {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  async randomizeStates() {
    this.setLocalStorage('randomPlayed', true);
    const unlock = await this.getLocalStorage('longPlayed');
    if (unlock) {
      this.unlockRecord('record6');
    }
    let tempStates = this.states;
    tempStates = this.shuffle(tempStates);
    let middleIndex = 0;
    let voteCount = 0;
    for (const state of tempStates) {
      if (voteCount < 262) {
        middleIndex++;
        voteCount += state.college;
      }
    }
    const demFirst = voteCount % 2 === 0; //decide to assign dem first
    let index = 0;
    for (const state of tempStates) {
      const lean = Math.floor(Math.random() * 17) + 1;
      if ((index <= middleIndex && demFirst) || (index >= middleIndex && !demFirst)) {
        state.repPercent = 40 - Math.floor(lean / 2);
        state.leansRep = -lean;
        state.demPercent = 40 + Math.ceil(lean / 2);
        state.leansDem = lean;
      } else {
        state.repPercent = 40 + Math.floor(lean / 2);
        state.leansRep = lean;
        state.demPercent = 40 - Math.ceil(lean / 2);
        state.leansDem = -lean;
      }
      index++;
    }
  }

  async setLongGameLength() {
    this.setLocalStorage('longPlayed', true);
    const unlock = await this.getLocalStorage('randomPlayed');
    if (unlock) {
      this.unlockRecord('record6');
    }
    this.gameLength = 32;
  }

  setElectionOf1916() {
    //JERMY 1916 issus:
    /*
      END MAP NEEDS TO GET THE {{this.votes.college}} and CABLE NEWS TOO
      Events that refrence Alaska or Hawaii!!!!
      Maxing out states... we do not want +100 point to be possible. (good for regular DC I think too)
      Maybe we use custom events? just a 'get1916Events' and they are a bit more limited and old timey?
      ALSO THE ACHIVEMENT ABOUT PLAYING ALL GAME MODES
    */
    this.neededToWin = 266;
    this.Alaska = null;
    this.Hawaii = null;
    this.Alabama = new State('Alabama','AL',12, 72,21);
    this.Arizona = new State('Arizona','AZ',3,52,35);
    this.Arkansas = new State('Arkansas','AR',9,60,35);
    this.California = new State('California','CA',13,47,46);
    this.Colorado = new State('Colorado','CO',6,55,39);
    this.Connecticut = new State('Connecticut','CT',7,36,39);
    this.Delaware = new State('Delaware','DE',3,47,49);
    this.Florida = new State('Florida','FL',6,64,18);
    this.Georgia = new State('Georgia','GA',14,65,12);
    this.Idaho = new State('Idaho','ID',4,52,41);
    this.Illinois = new State('Illinois','IL',29,44,52);
    this.Indiana = new State('Indiana','IN',15,46,47);
    this.Iowa = new State('Iowa','IA',13,39,46);
    this.Kansas = new State('Kansas','KS',10,49,44);
    this.Kentucky = new State('Kentucky','KY',13,51,47);
    this.Louisiana = new State('Louisiana','LA',10,80,7);
    this.Maine = new State('Maine','ME',6,38,42);
    this.Maryland = new State('Maryland','MD',8,51,44);
    this.Massachusetts = new State('Massachusetts','MA',18,46,50);
    this.Michigan = new State('Michigan','MI',15,44,52);
    this.Minnesota = new State('Minnesota','MN',12,45,46);
    this.Mississippi = new State('Mississippi','MS',10,80,4);
    this.Missouri = new State('Missouri','MO',18,50,47);
    this.Montana = new State('Montana','MT',4,50,41);
    this.Nebraska = new State('Nebraska','NE',8,50,43);
    this.Nevada = new State('Nevada','NV',3,50,41);
    this.NewHampshire = new State('New Hampshire','NH',4,49,48);
    this.NewJersey = new State('New Jersey','NJ',14,42,54);
    this.NewMexico = new State('New Mexico','NM',3,50,47);
    this.NewYork = new State('New York','NY',45,44,46);
    this.NorthCarolina = new State('North Carolina','NC',12,48,42);
    this.NorthDakota = new State('North Dakota','ND',5,41,39);
    this.Ohio = new State('Ohio','OH',24,51,44);
    this.Oklahoma = new State('Oklahoma','OK',10,50,45);
    this.Oregon = new State('Oregon','OR',5,45,48);
    this.Pennsylvania = new State('Pennsylvania','PA',38,40,42);
    this.RhodeIsland = new State('Rhode Island','RI',5,46,51);
    this.SouthCarolina = new State('South Carolina','SC',9,80,4);
    this.SouthDakota = new State('South Dakota','SD',5,45,49);
    this.Tennessee = new State('Tennessee','TN',12,54,42);
    this.Texas = new State('Texas','TX',20,76,15);
    this.Utah = new State('Utah','UT',4,58,38);
    this.Vermont = new State('Vermont','VT',4,35,62);
    this.Virginia = new State('Virginia','VA',12,44,39);
    this.Washington = new State('Washington','WA',7,39,35);
    this.WestVirginia = new State('West Virginia','WV',8,38,39);
    this.Wisconsin = new State('Wisconsin','WI',13,41,49);
    this.Wyoming = new State('Wyoming','WY',3,54,41);
    this.states = [
      this.Alabama,
      this.Arizona,
      this.Arkansas,
      this.California,
      this.Colorado,
      this.Connecticut,
      this.Delaware,
      this.Florida,
      this.Georgia,
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

  reset() {
    this.neededToWin = 270;
    this.scandals = 0;
    this.gameLength = 16;
    this.unlockedOccuredThisRound = false;
    this.visitedStates = {};
    this.isDemocrat = true;
    this.isThird = false;
    this.funds = 0;
    this.opponentFunds = 0;
    this.round = 1;
    this.turn = 0;
    this.NationalClimate = 0;
    this.progressMessage = '';
    this.progress = 0;
    this.Alabama = new State('Alabama','AL',9, 32,49);
    this.Alaska = new State('Alaska','AK',3,33,48);
    this.Arizona = new State('Arizona','AZ',11,40,41);
    this.Arkansas = new State('Arkansas','AR',6,32,49);
    this.California = new State('California','CA',54,52,30);
    this.Colorado = new State('Colorado','CO',10,42,39);
    this.Connecticut = new State('Connecticut','CT',7,46,35);
    this.Delaware = new State('Delaware','DE',3,45,35);
    this.DC = new State('DC','DC',3, 75, 7);
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
