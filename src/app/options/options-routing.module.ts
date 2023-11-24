import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartySelectPage } from './partyselect.component';
import { ThirdIntroPage } from './third-intro.component';
import { BackgroundInfoPage } from './background-info.component';
import { GameModePage } from './gamemode.component';
import { PurchasePage } from './purchase.component';
import { HistoricInfoPage } from './historic-info.component';

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
