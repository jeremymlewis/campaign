import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsPage } from './results-page.component';
import { CableNewsPage } from './cable-news/cable-news.component';
import { FinalMapPage } from './final-map/final-map.component';
import { ElectionDayPage } from './election-day/election-day.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsPage,
  },
  {
    path: 'cable-news',
    component: CableNewsPage,
  },
  {
    path: 'final-map',
    component: FinalMapPage,
  },
  {
    path: 'election-day',
    component: ElectionDayPage,
  },

  //ideas: opponent phone call? CLASSIC.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule {}
