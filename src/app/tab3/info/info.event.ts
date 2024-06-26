import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-event',
  templateUrl: 'info.event.html',
  styleUrls: ['info.css']
})
export class InfoEventPage {
  constructor(private router: Router) {}

  continue() {
    this.router.navigateByUrl('/tabs/tab3');
  }

}
