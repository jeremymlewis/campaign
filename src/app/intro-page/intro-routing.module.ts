import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPage } from './intro-page.component';
import { WelcomePage } from './welcome.component';
import { RecordsPage } from './records.component';
import { Records2Page } from './records2.component';

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
    path: 'records',
    component: RecordsPage
  },
  {
    path: 'records2',
    component: Records2Page
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule {}
