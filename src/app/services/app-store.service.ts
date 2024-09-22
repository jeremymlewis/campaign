// import 'cordova-plugin-purchase';
// import { Injectable } from '@angular/core';

// import { Platform } from '@ionic/angular';
// import { VotesStore } from '../data-store/votes.store';

// @Injectable()
// export class AppStoreService {

//   // DO NOT initialize to CdvPurchase.store here
//   store?: CdvPurchase.Store;

//   constructor(public platform: Platform, voteStore: VotesStore) {
//     this.platform.ready().then(() => {
//       // MUST WAIT for Cordova to initialize before referencing CdvPurchase namespace
//       this.store = CdvPurchase.store;
//       this.store.register({
//         id: 'com.yourapp.extralevels',
//         platform: CdvPurchase.Platform.APPLE_APPSTORE,
//         type: CdvPurchase.ProductType.NON_CONSUMABLE
//       });
//       this.store.when()
//       .approved(() => {
//         voteStore.setLocalStorage("extralevels", "purchased");
//       });
//       this.store.initialize([
//         CdvPurchase.Platform.APPLE_APPSTORE,
//       ]);
//     });
//   }

//   //restore
//   async restore() {
//     if (this.store) {
//       this.store.restorePurchases();
//     }
//   }

// }
