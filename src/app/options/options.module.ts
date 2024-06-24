import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartySelectPage } from './party-select/partyselect.component';
import { OptionsRoutingModule } from './options-routing.module';
import { ThirdIntroPage } from './third-intro/third-intro.component';
import { BackgroundInfoPage } from './background-info/background-info.component';
import { GameModePage } from './gamemode/gamemode.component';
import { PurchasePage } from './purchase/purchase.component';
import { HistoricInfoPage } from './historic-info/historic-info.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OptionsRoutingModule
  ],
  declarations: [GameModePage, PartySelectPage, ThirdIntroPage, BackgroundInfoPage, PurchasePage, HistoricInfoPage]
})
export class OptionsModule {}
