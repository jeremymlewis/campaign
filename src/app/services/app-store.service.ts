import 'cordova-plugin-purchase';
import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';

@Injectable()
export class AppStoreService {

  // DO NOT initialize to CdvPurchase.store here
  store?: CdvPurchase.Store;

  constructor(public platform: Platform) {
    this.platform.ready().then(() => {
      // MUST WAIT for Cordova to initialize before referencing CdvPurchase namespace
      this.store = CdvPurchase.store;
    });
  }
}
