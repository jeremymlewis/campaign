import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartySelectPage } from './party-select/partyselect.component';
import { ThirdIntroPage } from './third-intro/third-intro.component';
import { BackgroundInfoPage } from './background-info/background-info.component';
import { GameModePage } from './gamemode/gamemode.component';
import { PurchasePage } from './purchase/purchase.component';
import { HistoricInfoPage } from './historic-info/historic-info.component';
import { PartySelectWaitPage } from './party-select/partyselect-wait.component';

const routes: Routes = [
  {
    path: '',
    component: GameModePage,
  },
  {
    path: 'party',
    component: PartySelectPage,
  },
  {
    path: 'party-wait',
    component: PartySelectWaitPage,
  },
  {
    path: 'third',
    component: ThirdIntroPage
  },
  {
    path: 'background',
    component: BackgroundInfoPage
  },
  {
    path: 'purchase',
    component: PurchasePage
  },
  {
    path: 'historic',
    component: HistoricInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule {}
