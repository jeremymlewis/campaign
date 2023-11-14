import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../services/audio.service';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-purchase-page',
  templateUrl: 'purchase.component.html',
  styleUrls: ['partyselect.component.css']
})
export class PurchasePage  {
  constructor(private route: Router, private votes: VotesStore) {}

  back() {
    this.route.navigateByUrl('/options');
  }
}
