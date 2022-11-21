import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: 'info.advertise.html',
  styleUrls: ['info.css']
})
export class InfoAdvertisePage {
  constructor(private router: Router) {}

  continue() {
    this.router.navigateByUrl('/tabs/tab3');
  }

}
