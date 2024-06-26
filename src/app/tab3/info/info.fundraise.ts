import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-fundraise',
  templateUrl: 'info.fundraise.html',
  styleUrls: ['info.css']
})
export class InfoFundraisePage {
  constructor(private router: Router) {}

  continue() {
    this.router.navigateByUrl('/tabs/tab3');
  }

}
