import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { CalculationService } from '../../services/calculations.service';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-dice',
  templateUrl: 'dice.component.html',
  styleUrls: ['dice.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class DiceComponent {
  @Output() diceRolled = new EventEmitter<number>();
  @Output() rollStarted = new EventEmitter<boolean>();
  @Input() canClick = true;
  @Input() slot0: number[] = [];
  @Input() slot1: number[] = [];
  @Input() slot2: number[] = [];
  @Input() slot3: number[] = [];
  @Input() slot4: number[] = [];
  @Input() slot5: number[] = [];

  @Input() val0 = '0';
  @Input() val1 = '1';
  @Input() val2 = '2';
  @Input() val3 = '3';
  @Input() val4 = '4';
  @Input() val5 = '5';

  value = 1;
  imageValue= 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + '1';
  image1 = 'dice1';
  image2 = 'dice2';
  image3 = 'dice3';
  image4 = 'dice4';
  image5 = 'dice5';
  image6 = 'dice6';


  constructor(private calculationService: CalculationService, public votes: VotesStore ) {}



  setImage(num: number) {
    if (num <2) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 1;
    } else if (num === 2) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 2;
    } else if (num === 3) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 3;
    } else if (num === 4) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 4;
    } else if (num === 5) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 5;
    } else {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 6;
    }
  }

  rollDice() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.setImage(this.value);
  }

  async animatedDiceRoll() {
    this.votes.actionPending = true;
    this.rollStarted.emit(true);
    document.getElementById('dice').style.animation = 'rotation 1.6s';
    this.canClick = false;
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 80));
    this.rollDice();
    await new Promise(f => setTimeout(f, 500));
    //document.getElementById('dice').style.animation = '';
    this.diceRolled.emit(this.value);
    await new Promise(f => setTimeout(f, 1000));

    this.votes.actionPending = false;
    await new Promise(f => setTimeout(f, 500));
    this.canClick = true;
  }

}
