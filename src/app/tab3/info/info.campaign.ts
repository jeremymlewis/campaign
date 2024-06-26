import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-campaign',
  templateUrl: 'info.campaign.html',
  styleUrls: ['info.css']
})
export class InfoCampaignPage {
  constructor(private router: Router) {}

  continue() {
    this.router.navigateByUrl('/tabs/tab3');
  }

}
