import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historic',
  templateUrl: 'historic-info.component.html',
  styleUrls: ['historic-info.component.css']
})
export class HistoricInfoPage {
  constructor(private router: Router) {}

  continue() {
    this.router.navigateByUrl('/options/party');
  }

}
