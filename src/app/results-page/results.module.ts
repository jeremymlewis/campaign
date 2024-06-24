import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultsPage } from './results-page.component';
import { CableNewsPage } from './cable-news/cable-news.component';
import { FinalMapPage } from './final-map/final-map.component';
import { ElectionDayPage } from './election-day/election-day.component';
import { ResultsRoutingModule } from './results-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ResultsRoutingModule
  ],
  declarations: [ResultsPage, CableNewsPage, FinalMapPage, ElectionDayPage]
})
export class ResultsModule {}
