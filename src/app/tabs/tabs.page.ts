import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  actionPending = false;
  constructor(private router: Router) {}

  actionStart() {//IDK MAKE THIS HAPPEN TOMORROW
    this.actionPending = true;
  }

  actionEnd() {
    this.actionPending = false;
  }

  isTab1(): boolean {
    if (this.router.url.includes('tab1')) {
      return true;
    } else {
      return false;
    }
  }

}
