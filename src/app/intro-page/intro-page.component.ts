import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: 'intro-page.component.html',
  styleUrls: ['intro-page.component.css']
})
export class IntroPage implements AfterViewInit {
  passwordRequired = false;
  passcode = '';
  constructor(private route: Router, private audio: AudioService,) {}

  ngAfterViewInit() {
    this.audio.preload('chief', 'assets/audio/chief.mp3');
  }

  toTabs() {
    this.audio.play('chief');
    if(!this.passwordRequired || this.passcode === 'jonaslinde') {
      this.route.navigateByUrl('/welcome');
    }
  }

}
