import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  actionPending = false;
  progressMessage = '';
  progress = 1;
  constructor(private router: Router) {}

  actionStart() {//IDK MAKE THIS HAPPEN TOMORROW
    //this.actionPending = true;
    //JERMY TODO CRITICAL MAKE THIS MOVE ON SOME OTHER TIME
    document.getElementById('greenbar').style.width = ((this.progress) / 16) * 100 + '%';
    document.getElementById('whitebar').style.width = ((16-this.progress) / 16) * 100+ '%';
    document.getElementById('progress-icon').style.left = ((this.progress) / 16) * 100 - 4 + '%';
    if (this.progress > 13) {
      document.getElementById('greenbar').style.backgroundImage = 'linear-gradient(to left, rgb(255, 255, 255), rgb(255, 40, 40))';
      this.progressMessage = 'ELECTION DAY SOON';
    }
    if (this.progress > 14) {
      document.getElementById('finish-icon').style.left = '100%';
    }
    if (this.progress > 15) {
      document.getElementById('finish-icon').style.left = '100%';
      document.getElementById('greenbar').style.backgroundColor = '#30ff30';
      document.getElementById('greenbar').style.backgroundImage = 'none';
      this.progressMessage = 'ELECTION DAY!';
    } else {
      this.progress++;
    }

    console.log(this.progress);
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
