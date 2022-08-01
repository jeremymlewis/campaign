import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'intro-page',
  templateUrl: 'intro-page.component.html',
  styleUrls: ['intro-page.component.css']
})
export class IntroPage {

  constructor(private route: Router) {}

  toTabs() {
    this.route.navigateByUrl('/tabs');
  }

}
