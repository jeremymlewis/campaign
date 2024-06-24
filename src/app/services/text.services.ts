/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../data-store/state';
import { BoonEvents } from './events/boon.events';
import { EndorsementEvents } from './events/endorsement.events';
import { GaffeEvents } from './events/gaffe.events';
import { HotButtonEvents } from './events/hotbutton.events';
import { MediaTourEvents } from './events/media.events';
import { PacEvents } from './events/pac.events';
import { ScandalEvents } from './events/scandal.events';

@Injectable({providedIn: 'root'})
export class TextService {
  constructor(
    public boon: BoonEvents,
    public endorsement: EndorsementEvents,
    public gaffe: GaffeEvents,
    public hotButton: HotButtonEvents,
    public mediaTour: MediaTourEvents,
    public pac: PacEvents,
    public scandal: ScandalEvents
  ){}

  //TODO jermy add events from Julies spreadsheet
  //https://docs.google.com/spreadsheets/d/1yP6gM0ZuIBHZIh7I--olHJp9dRAVWD300xbBQVGuFeQ/edit#gid=1533506833
  public getScandalEvents(): Event[] {
    return this.scandal.getScandalEvents();
  }

  public getGaffeEvents(): Event[] {
    return this.gaffe.getGaffeEvents();
  }

  public getBoonEvents(): Event[] {
    return this.boon.getBoonEvents();
  }

  public getEndorsementEvents(): Event[] {
    return this.endorsement.getEndorsementEvents();
  }

  public getSuperPacEvents(): Event[] {
    return this.pac.getSuperPacEvents();
  }

  public getMediaTourEvents(): Event[] {
    return this.mediaTour.getMediaTourEvents();
  }

  public getHotButtonEvents(): Event[] {
    return this.hotButton.getHotButtonEvents();
  }

  public getTurns(longGame: boolean = false): string[] {
    let turns = [
      'It is your first turn! Each turn you get to choose 1 action. Click on one of the options below! Your opponent will go next.',
      'Good job in Round 1! Tap the Map/Polls icon at the bottom of the page to see how you are doing in the Polls.',
      'Welcome to Round 3! Have you tried fundraising yet?',
      'It is Round 4.',
      'It is Round 5. Are you paying attention to your opponent\'s moves? They might affect your strategy.',
      'It is Round 6.',
      'It is Round 7. ',
      'It is Round 8. You are half way to the Election!',
      'It is Round 9. Sometimes it pays off to go after a state that seems out of reach...',
      'It is Round 10. I hope you get a good Event Card this time...',
      'It is Round 11. ',
      'It is Round 12. You are doing great. I would vote for you.',
      'It is Round 13. ',
      'It is Round 14. We are three rounds away! Check the Map for which last states to target.',
      'It is Round 15. ',
      'It is Round 16. This is your last move before election day! Make it count!'
    ];
    if (longGame) {
      turns = [
        'It is your first turn! Each turn you get to choose 1 action. Click on one of the options below! Your opponent will go next.',
        'Good job in Round 1! Tap the Map/Polls icon at the bottom of the page to see how you are doing in the Polls.',
        'Welcome to Round 3! Have you tried fundraising yet?',
        'It is Round 4.',
        'It is Round 5. Are you paying attention to your opponent\'s moves? They might affect your strategy.',
        'It is Round 6.',
        'It is Round 7. ',
        'It is Round 8. ',
        'It is Round 9. Sometimes it pays off to go after a state that seems out of reach...',
        'It is Round 10. I hope you get a good Event Card this time...',
        'It is Round 11. ',
        'It is Round 12. ',
        'It is Round 13. Remember to check the MAP often!',
        'It is Round 14. ',
        'It is Round 15. ',
        'It is Round 16. ',
        'It is Round 17. You are half way to the Election!',
        'It is Round 18. ',
        'It is Round 19. ',
        'It is Round 20. ',
        'It is Round 21. You are doing great!',
        'It is Round 22. ',
        'It is Round 23. ',
        'It is Round 24. Keep it up!',
        'It is Round 25. ',
        'It is Round 26. ',
        'It is Round 27. ',
        'It is Round 28. ',
        'It is Round 29. We are three rounds away! Check the Map for which last states to target.',
        'It is Round 30. ',
        'It is Round 31. ',
        'It is Round 32. This is your last move before election day! Make it count!'
      ];
    }
    return turns;
  }

  public getFundraisingFacts(): any[] {
    const facts = [
      {
        presidentIcon: '/assets/images/presidents/44-obama.jpg',
        eventHistory: 'Barack Obama spent $730 Million during the 2008 election'
      },
      {
        presidentIcon: '/assets/images/presidents/37-nixon.jpg',
        eventHistory: 'Richard Nixon spent $25.4 Million during the 1968 election'
      },
      {
        presidentIcon: '/assets/images/presidents/39-carter.jpg',
        eventHistory: 'Jimmy Carter spent $33.4 Million during the 1976 election'
      },
      {
        presidentIcon: '/assets/images/presidents/40-reagan.jpg',
        eventHistory: 'Ronald Reagan spent $57.7 Million during the 1980 election'
      },
      {
        presidentIcon: '/assets/images/presidents/41-bush.jpg',
        eventHistory: 'George H W Bush spent $80 Million during the 1988 election'
      },
      {
        presidentIcon: '/assets/images/presidents/42-clinton.jpg',
        eventHistory: 'Bill Clinton spent $107 Million during the 1992 election'
      },
      {
        presidentIcon: '/assets/images/presidents/43-bush.jpg',
        eventHistory: 'George W Bush spent $186 Millon during the 2000 election'
      },
    ];
    return facts;
  }

}
