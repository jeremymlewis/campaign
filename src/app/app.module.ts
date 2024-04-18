import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicStorageModule.forRoot(), IonicModule.forRoot({
    swipeBackEnabled: false,
    animated: false,
  }), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NativeAudio],
  bootstrap: [AppComponent],
})
export class AppModule {}
