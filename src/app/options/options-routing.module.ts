import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsPage } from './options.component';

const routes: Routes = [
  {
    path: '',
    component: OptionsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule {}
