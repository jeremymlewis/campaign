import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: 'dice.component.html',
  styleUrls: []
})

@Injectable({
  providedIn: 'root'
})
export class DiceComponent {
  value: number = 1;
  imageValue: string = 'dice1';
  image1: string = "dice1";
  image2: string = "dice2";
  image3: string = "dice3";
  image4: string = "dice4";
  image5: string = "dice5";
  image6: string = "dice6";

  setImage(number: number) {
    if (number <2) {
      this.imageValue = this.image1;
    } else if (number == 2) {
      this.imageValue = this.image2;
    } else if (number == 3) {
      this.imageValue = this.image3;
    } else if (number == 4) {
      this.imageValue = this.image4;
    } else if (number == 5) {
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
    this.rollDice();
    await new Promise(f => setTimeout(f, 200));
    this.rollDice();
    await new Promise(f => setTimeout(f, 200));
    this.rollDice();
    await new Promise(f => setTimeout(f, 200));
    this.rollDice();
    await new Promise(f => setTimeout(f, 200));
    this.rollDice();
  }

}
