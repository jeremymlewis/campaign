import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisePage } from './advertise/advertise.component';
import { CampaignPage } from './campaign/campaign.component';
import { EventPage } from './event/event.component';
import { EventWelcomePage } from './event/event.welcome';
import { FundraisePage } from './fundraise/fundraise.component';
import { OpponentPage } from './opponent/opponent.component';
import { Tab1Page } from './tab1.page';
import { OpponentWaitPage } from './opponent/wait-screen.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'campaign',
    component: CampaignPage,
  },
  {
    path: 'opponent',
    component: OpponentPage,
  },
  {
    path: 'wait-turn',
    component: OpponentWaitPage,
  },
  {
    path: 'firstevent',
    component: EventWelcomePage,
  },
  {
    path: 'fundraise',
    component: FundraisePage,
  },
  {
    path: 'advertise',
    component: AdvertisePage,
  },
  {
    path: 'event',
    component: EventPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
