import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) {}

  isTab1(): boolean {
    if (this.router.url.includes('tab1')) {
      return true;
    } else {
      return false;
    }
  }

}
