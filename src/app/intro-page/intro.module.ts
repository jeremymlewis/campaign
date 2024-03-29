import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntroPage } from './intro-page.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { IntroRoutingModule } from './intro-routing.module';
import { WelcomePage } from './welcome.component';
import { RecordsPage } from './records.component';
import { Records2Page } from './records2.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IntroRoutingModule
  ],
  declarations: [IntroPage, WelcomePage, RecordsPage, Records2Page]
})
export class IntroModule {}
