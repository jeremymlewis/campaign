import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { FundraisePage } from './fundraise/fundraise.component';
import { EventPage } from './event/event.component';
import { EventWelcomePage } from './event/event.welcome';
import { CampaignPage } from './campaign/campaign.component';
import { AdvertisePage } from './advertise/advertise.component';
import { DiceComponent } from '../general-components/dice/dice.component';
import { RollTableComponent } from '../general-components/roll-table/rolltable.component';
import { OpponentPage } from './opponent/opponent.component';
import { ResultsPage } from './results/results.component';
import { ScoreDisplayPipe } from '../score-display.pipe';
import { ModalToastComponent } from '../general-components/modal-toast/modal-toast.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [
    Tab1Page,
    FundraisePage,
    EventPage,
    EventWelcomePage,
    CampaignPage,
    AdvertisePage,
    DiceComponent,
    RollTableComponent,
    OpponentPage,
    ResultsPage,
    ScoreDisplayPipe,
    ModalToastComponent,
  ],
  providers: [
    ScoreDisplayPipe
  ]
})
export class Tab1PageModule {}
