/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../../stores/state';


@Injectable({providedIn: 'root'})
export class MediaTourEvents {
  public getMediaTourEvents(): Event[] {
    //3 event cards (3 GOAL)
    const results: Event[] = [
      {
        title:'Media Tour',
        description:'A National TV show invites you on for an interview',
        points: 1,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'Franklin D Roosevelt was the first president to appear on TV during the 1939 World\'s Fair',
        politicanInvolved: 'Franklin D Roosevelt',
        yearInvolved:'1940',
        normalFactDisplay: false,
        statesInvolved: [],
        diceEvent: true,
        choiceEvent: false
      },
      {
        title:'Media Tour',
        description:'A national Radio Show/Podcast Network invites you on for an interview',
        points: 1,
        imageSrc:'/assets/images/presidents/29-harding.jpg',
        history: 'Warren G Harding was the first president to talk over the radio, giving a speech at the dedication of the Lincoln monument',
        politicanInvolved: 'Warren G Harding',
        yearInvolved:'1920',
        normalFactDisplay: false,
        statesInvolved: [],
        diceEvent: true,
        choiceEvent: false
      },
      {
        title:'Media Tour',
        description:'A popular website runs a big story on you',
        points: 1,
        imageSrc:'/assets/images/presidents/42-clinton.jpg',
        history: 'Bill Clinton was the president when the White House built their first website',
        politicanInvolved: 'Bill Clinton',
        yearInvolved:'1996',
        normalFactDisplay: false,
        statesInvolved: [],
        diceEvent: true,
        choiceEvent: false
      }
    ];
    return results;
  }
}
