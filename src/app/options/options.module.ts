import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { OptionsPage } from './options.component';
import { OptionsRoutingModule } from './options-routing.module';
import { ThirdIntroPage } from './third-intro.component';
import { BackgroundInfoPage } from './background-info.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OptionsRoutingModule
  ],
  declarations: [OptionsPage, ThirdIntroPage, BackgroundInfoPage]
})
export class OptionsModule {}
