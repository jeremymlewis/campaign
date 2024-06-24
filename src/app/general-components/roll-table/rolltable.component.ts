import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-rolltable',
  templateUrl: 'rolltable.component.html',
  styleUrls: ['rolltable.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class RollTableComponent {

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

  constructor( public votes: VotesStore ) {}



}
