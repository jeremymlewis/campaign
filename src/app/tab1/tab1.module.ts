import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { FundraisePage } from './fundraise/fundraise.component';
import { EventPage } from './event/event.component';
import { EventWelcomePage } from './event/event.welcome';
import { CampaignPage } from './campaign/campaign.component';
import { AdvertisePage } from './advertise/advertise.component';
import { DiceComponent } from '../dice/dice.component';
import { OpponentPage } from './opponent/opponent.component';
import { ResultsPage } from './results/results.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
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
    OpponentPage,
    ResultsPage
  ]
})
export class Tab1PageModule {}
