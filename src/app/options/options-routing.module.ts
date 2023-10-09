import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsPage } from './options.component';
import { ThirdIntroPage } from './third-intro.component';
import { BackgroundInfoPage } from './background-info.component';

const routes: Routes = [
  {
    path: '',
    component: OptionsPage,
  },
  {
    path: 'third',
    component: ThirdIntroPage
  },
  {
    path: 'background',
    component: BackgroundInfoPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule {}
