import { AdMob, AdOptions, AdLoadInfo, InterstitialAdPluginEvents, AdMobInitializationOptions } from '@capacitor-community/admob';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MobileAdsService implements OnInit {

  constructor(private route: Router) { }


  ngOnInit(): void {
    this.initialize();
  }

  async interstitial(): Promise<void> {
    AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // Subscribe prepared interstitial
    });

    AdMob.addListener(InterstitialAdPluginEvents.Dismissed, () => {
      //route to home page
      this.route.navigateByUrl('/');
    });

    const options: AdOptions = {
      adId: 'ca-app-pub-9023088789856326/7107684114',
      isTesting: true,
      npa: true
    };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  }

  async initialize(): Promise<void> {
    let options: AdMobInitializationOptions = {};
    await AdMob.initialize(options);
  }
}

//App Id = ca-app-pub-9023088789856326~2972997983
//This should be added to the IOS files *thumbs up*
