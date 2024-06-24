import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntroPage } from './intro-page/intro-page.component';
import { HostJoinPage } from './multiplayer/host-join.component';

import { IntroRoutingModule } from './intro-routing.module';
import { WelcomePage } from './welcome-page/welcome.component';
import { RecordsPage } from './records-pages/records.component';
import { Records2Page } from './records-pages/records2.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IntroRoutingModule
  ],
  declarations: [IntroPage, WelcomePage, RecordsPage, Records2Page, HostJoinPage]
})
export class IntroModule {}
