import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { CalculationService } from '../services/calculations.service';

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
  value = 1;
  imageValue = 'dice1';
  image1 = 'dice1';
  image2 = 'dice2';
  image3 = 'dice3';
  image4 = 'dice4';
  image5 = 'dice5';
  image6 = 'dice6';

  constructor(private calculationService: CalculationService ) {}



  setImage(num: number) {
    if (num <2) {
      this.imageValue = this.image1;
    } else if (num === 2) {
      this.imageValue = this.image2;
    } else if (num === 3) {
      this.imageValue = this.image3;
    } else if (num === 4) {
      this.imageValue = this.image4;
    } else if (num === 5) {
      this.imageValue = this.image5;
    } else {
      this.imageValue = this.image6;
    }
  }

  rollDice() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.setImage(this.value);
  }

  async animatedDiceRoll() {
    this.rollStarted.emit(true);
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
    this.diceRolled.emit(this.value);
    await new Promise(f => setTimeout(f, 4000));
    this.canClick = true;
  }

}
