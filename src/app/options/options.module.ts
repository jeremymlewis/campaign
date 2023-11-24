import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PartySelectPage } from './partyselect.component';
import { OptionsRoutingModule } from './options-routing.module';
import { ThirdIntroPage } from './third-intro.component';
import { BackgroundInfoPage } from './background-info.component';
import { GameModePage } from './gamemode.component';
import { PurchasePage } from './purchase.component';
import { HistoricInfoPage } from './historic-info.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OptionsRoutingModule
  ],
  declarations: [GameModePage, PartySelectPage, ThirdIntroPage, BackgroundInfoPage, PurchasePage, HistoricInfoPage]
})
export class OptionsModule {}
