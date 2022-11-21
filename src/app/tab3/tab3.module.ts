import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { InfoAdvertisePage } from './info/info.advertise';
import { InfoCampaignPage } from './info/info.campaign';
import { InfoDebatePage } from './info/info.debate';
import { InfoEventPage } from './info/info.event';
import { InfoFundraisePage } from './info/info.fundraise';
import { InfoTurnPage } from './info/info.turn';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page, InfoAdvertisePage, InfoCampaignPage, InfoDebatePage, InfoEventPage, InfoFundraisePage, InfoTurnPage]
})
export class Tab3PageModule {}
