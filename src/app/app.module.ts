import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
//import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot({
      swipeBackEnabled: false,
      animated: false,
    }),
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
