import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultsPage } from './results-page.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ResultsRoutingModule } from './results-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ResultsRoutingModule
  ],
  declarations: [ResultsPage]
})
export class ResultsModule {}
