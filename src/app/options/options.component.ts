import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-page',
  templateUrl: 'options.component.html',
  styleUrls: []
})
export class OptionsPage {
  constructor(private route: Router) {}

  continue() {
      this.route.navigateByUrl('/tabs');
  }

}
