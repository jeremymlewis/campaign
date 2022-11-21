import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { InfoAdvertisePage } from './info/info.advertise';
import { InfoCampaignPage } from './info/info.campaign';
import { InfoDebatePage } from './info/info.debate';
import { InfoEventPage } from './info/info.event';
import { InfoFundraisePage } from './info/info.fundraise';
import { InfoTurnPage } from './info/info.turn';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'advertise',
    component: InfoAdvertisePage,
  },
  {
    path: 'campaign',
    component: InfoCampaignPage,
  },
  {
    path: 'debate',
    component: InfoDebatePage,
  },
  {
    path: 'event',
    component: InfoEventPage,
  },
  {
    path: 'fundraise',
    component: InfoFundraisePage,
  },
  {
    path: 'turn',
    component: InfoTurnPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
