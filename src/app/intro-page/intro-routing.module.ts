import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPage } from './intro-page/intro-page.component';
import { WelcomePage } from './welcome-page/welcome.component';
import { RecordsPage } from './records-pages/records.component';
import { Records2Page } from './records-pages/records2.component';
import { HostJoinPage } from './multiplayer/host-join.component';
import { HostJoinFailPage } from './multiplayer/host-join-fail.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPage,
  },
  {
    path: 'welcome',
    component: WelcomePage
  },
  {
    path: 'host-join',
    component: HostJoinPage
  },
  {
    path: 'host-join/fail',
    component: HostJoinFailPage
  },
  {
    path: 'records',
    component: RecordsPage
  },
  {
    path: 'records2',
    component: Records2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule {}
