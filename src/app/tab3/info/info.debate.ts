import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: 'info.debate.html',
  styleUrls: ['info.css']
})
export class InfoDebatePage {
  constructor(private router: Router) {}

  continue() {
    this.router.navigateByUrl('/tabs/tab3');
  }

}
