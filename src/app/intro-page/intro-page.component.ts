import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-page',
  templateUrl: 'intro-page.component.html',
  styleUrls: ['intro-page.component.css']
})
export class IntroPage {
  passcode = '';
  constructor(private route: Router) {}

  toTabs() {
    if(this.passcode === 'jonaslinde') {
      this.route.navigateByUrl('/options');
    }
  }

}
