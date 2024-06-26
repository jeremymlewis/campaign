/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TextService } from 'src/app/services/text.services';
import { VotesStore } from 'src/app/data-store/votes.store';

@Component({
  selector: 'app-wait-screen',
  templateUrl: 'wait-screen.component.html',
  styleUrls: ['wait-screen.component.css']
})
export class OpponentWaitPage implements OnInit {

  constructor(public votes: VotesStore) {}

  ngOnInit() {
    //determine from isHost, move, etc if you are waiting on an event or a turn
    //set the
  }


}
