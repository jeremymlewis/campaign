/* eslint-disable max-len */
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class CalculationService {
  diceValue = 0;
  public isOver = false;

  setDiceValue(value: number) {
    this.diceValue = value;
  }

  setDiceRollOver() {
    this.isOver = true;
  }

  getDiceValue() {
    this.isOver = false;
    return this.diceValue;
  }
}
