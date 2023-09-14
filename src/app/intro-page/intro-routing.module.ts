import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPage } from './intro-page.component';
import { WelcomePage } from './welcome.component';
import { RecordsPage } from './records.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule {}
