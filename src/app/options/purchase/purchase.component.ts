import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AudioService } from '../services/audio.service';
import { VotesStore } from '../../data-store/votes.store';

@Component({
  selector: 'app-purchase-page',
  templateUrl: 'purchase.component.html',
  styleUrls: ['../party-select/partyselect.component.css']
})
export class PurchasePage  {
  constructor(private route: Router, private votes: VotesStore) {}

  back() {
    this.route.navigateByUrl('/options');
  }
}
