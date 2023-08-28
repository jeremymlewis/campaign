import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPage } from './intro-page.component';
import { WelcomePage } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPage,
  },
  {
    path: 'welcome',
    component: WelcomePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule {}
