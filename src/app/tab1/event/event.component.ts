/* eslint-disable max-len */
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/data-store/votes.store';
import { Event } from '../../data-store/state';
import { ModalToastComponent } from 'src/app/general-components/modal-toast/modal-toast.component';
import { MultiPlayerService } from 'src/app/services/multiplayer.service';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.css']
})
export class EventPage implements OnInit {
  currentEvent: Event;
  allEvents: Event[];
  scandalEvents: Event[];
  gaffeEvents: Event[];
  //neutralizeEvents: Event[];
  boonEvents: Event[];
  endorsementEvents: Event[];
  superPacEvents: Event[];
  mediaTourEvents: Event[];
  hotButtonEvents: Event[];
  currentIndex = 0;
  eventTitle: string;
  eventDescription: string;
  eventHistory: string;
  eventIcon: string;
  eventYear: string;
  eventPersonInvolved: string;
  eventPoints: number;
  statesInvolved: string[];
  statesInvolvedString: string;
  normalFactDisplay: boolean;
  isDemocrat: boolean;
  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    public votes: VotesStore,
    private multiplayer: MultiPlayerService,
    public textService: TextService) {}
//TODO3 all this page

  ngOnInit() {
    this.currentIndex = this.votes.round - 2;
    this.isDemocrat = this.votes.isDemocrat;
    this.scandalEvents = this.textService.getScandalEvents();
    this.gaffeEvents = this.textService.getGaffeEvents();
    //this.neutralizeEvents = this.textService.getNeutralizationEvents();
    this.boonEvents = this.textService.getBoonEvents();
    this.endorsementEvents = this.textService.getEndorsementEvents();
    this.hotButtonEvents = this.textService.getHotButtonEvents();
    this.mediaTourEvents = this.textService.getMediaTourEvents();
    this.superPacEvents = this.textService.getSuperPacEvents();
    this.currentEvent = this.getCurrentEvent();
    this.eventTitle = this.currentEvent.title;
    this.eventDescription = this.currentEvent.description;
    this.eventHistory = this.currentEvent.history;
    this.eventIcon = this.currentEvent.imageSrc;
    this.eventYear = this.currentEvent.yearInvolved;
    this.eventPersonInvolved = this.currentEvent.politicanInvolved;
    this.eventPoints = this.currentEvent.points;
    this.normalFactDisplay = this.currentEvent.normalFactDisplay;
    this.statesInvolved = this.currentEvent.statesInvolved;
    this.statesInvolvedString = '';
    if (this.statesInvolved.length === 1) {
      this.statesInvolvedString  = ' ' + this.statesInvolved[0];
    } else {
      for (const state of this.statesInvolved) {
        this.statesInvolvedString += ' ';
        this.statesInvolvedString += state;
        this.statesInvolvedString += ',';
      }
      this.statesInvolvedString = this.statesInvolvedString.substring(0, this.statesInvolvedString.length - 1);
      this.statesInvolvedString = this.statesInvolvedString.slice(0, this.statesInvolvedString.length - 3) + ' and' + this.statesInvolvedString.slice(this.statesInvolvedString.length - 3);
    }
    //console.log(this.currentIndex);
  }


  getCurrentEvent(): Event {
   // return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    const currentEventType = this.getCurrentEventType();
    if (currentEventType === 'superPac' ) {
      return this.superPacEvents[Math.floor(Math.random() * this.superPacEvents.length)];
    } else if (currentEventType === 'endorsement') {
      return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    } else if (currentEventType === 'boon') {
      return this.boonEvents[Math.floor(Math.random() * this.boonEvents.length)];
    } else if (currentEventType === 'mediaTour') {
      return this.mediaTourEvents[Math.floor(Math.random() * this.mediaTourEvents.length)];
    } else if (currentEventType === 'hotButton') {
      return this.hotButtonEvents[Math.floor(Math.random() * this.hotButtonEvents.length)];
    }  else if (currentEventType === 'gaffe') {
      return this.gaffeEvents[Math.floor(Math.random() * this.gaffeEvents.length)];
    } else if (currentEventType === 'scandal') {
      return this.scandalEvents[Math.floor(Math.random() * this.scandalEvents.length)];
    }
    else {
      return this.allEvents[0];
    }

  }

  getCurrentEventType(): string {
    const draw = Math.floor(Math.random() * 93);
    if (draw > 95) {
      return                 'boon'; // 5%
    } else if (draw > 80) {
      return                 'mediaTour'; // 15%
    } else  if (draw > 60) {
      return                 'endorsement'; // 20%
    } else if (draw > 45) {
      return                 'superPac'; // 10%
    } else if (draw > 20) {
      return                 'hotButton'; // 25%
    } else if (draw > 6) {
      return                 'gaffe'; // 14%
    } else {
      this.votes.scandalDrawn();
      return                 'scandal'; // 6%
    }
  }

  async handleDiceRoll(roll: number) {
    if (roll <= 2) {
      this.handleRollToast(-1, []);
    } else {
      this.handleRollToast(1, []);
    }
  }

  async handleRollToast(roll: number, states: string[]) {

    let statesInvolved = '';
    let toastString = '';
    let toastTitle = '';

    if (states.length === 0) {
      if (roll < 0) {
        toastTitle = 'Bad news...';
        toastString = 'You fall ' + roll +  '% in the polls in every state';
      }  else {
        toastTitle = 'Good News!';
        toastString = 'You gain ' + roll +  '% in the polls in every state';
      }
    }
    else {
      if (states.length === 1) {
        statesInvolved  = ' ' + states[0];
      } else {
        for (const state of states) {
          statesInvolved += ' ';
          statesInvolved += state;
          statesInvolved += ',';
        }
        statesInvolved = statesInvolved.substring(0, statesInvolved.length - 1);
        statesInvolved = statesInvolved.slice(0, statesInvolved.length - 3) + ' and' + statesInvolved.slice(statesInvolved.length - 3);
      }
      if (roll < 0) {
        toastString = 'This moves the polls ' + (-roll) +  ' points toward your opponent in ' + statesInvolved;
        toastTitle = 'Tough luck...';
      }  else {
        toastTitle = 'Smart Choice!';
        toastString = 'This moves the polls ' + roll +  ' points in your favor in ' + statesInvolved;
      }
    }
    this.handleRoll(roll, states, toastString, toastTitle);
  }



  async handleRoll(roll: number, states: string[], message: string, title?: string) {
    if (states.length === 0) {
      if (this.isDemocrat) {
        this.votes.changeNationalClimate(roll/2, -roll/2);
      } else {
        this.votes.changeNationalClimate(-roll/2, roll/2);
      }
    } else {
      for (const state of states) {
        if (this.isDemocrat) {
          this.votes.changeStateClimate(state,roll/2,-roll/2);
        } else {
          this.votes.changeStateClimate(state,-roll/2,roll/2);
        }
      }
    }
    if (message) {
      this.openModal(message, title, states, roll);
    } else {
      this.endEvent(states, roll);
    }
  }

  async openModal(message, title = 'Results', states, roll) {
    const modal = await this.modalCtrl.create({
      component: ModalToastComponent,
      componentProps: { message, title },
      cssClass: "small-modal"
    });

    modal.onDidDismiss().then( () => {
      this.endEvent(states, roll);
    });

    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }

  checkRecordCompletion() {
    //check for 2 scandals in 1 game i.e. this.votes.scandalCount maybe?
  }


  endEvent(states, roll) {
    // this.currentIndex++;
    // if (this.currentIndex < 10) {
    //   this.currentEvent = this.allEvents[this.currentIndex];
    // } else {
    //   this.currentIndex = 0;
    //   this.currentEvent = this.allEvents[this.currentIndex];
    // }
    // const isDebate = (this.currentIndex === 3 || this.currentIndex === 6 || this.currentIndex === 8);
    // if (this.votes.NationalClimate > 3 && !isDebate) {
    //   if (this.isDemocrat) {
    //     this.currentEvent = this.allEvents[9];
    //   } else {
    //     this.currentEvent = this.allEvents[10];
    //   }
    // } else if (this.votes.NationalClimate < -3 && !isDebate) {
    //   if (this.isDemocrat) {
    //     this.currentEvent = this.allEvents[10];
    //   } else {
    //     this.currentEvent = this.allEvents[9];
    //   }
    // }
    // this.eventTitle = this.currentEvent.title;
    // this.eventDescription = this.currentEvent.description;
   // this.eventRollsL = this.currentEvent.rollMapDescription1;
    //this.eventRollsR = this.currentEvent.rollMapDescription2;

    if (this.votes.isMultiplayer) {
      if (this.votes.isHost) {
        this.multiplayer.sendHostSpecial(this.eventTitle, states, roll);
        this.router.navigateByUrl('/tabs/tab1/wait-turn', { replaceUrl: true });
      } else {
        this.multiplayer.sendGuestSpecial(this.eventTitle, states, roll);
        this.router.navigateByUrl('/tabs/tab1/wait-turn', { replaceUrl: true });
      }
    } else {
      this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
    }

  }
}
