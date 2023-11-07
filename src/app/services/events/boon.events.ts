/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../../stores/state';


@Injectable({providedIn: 'root'})
export class BoonEvents {
  //3 event cards
  public getBoonEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Boon',
        description:'Your opponent is rocked by a scandal',
        points: 1,
        imageSrc:'/assets/images/presidents/campaign.png',
        history: 'Sometimes a bad opponent is more important than a good candidate',
        politicanInvolved: '',
        yearInvolved:'',
        normalFactDisplay: false,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Boon',
        description:'A close family member dies, and you handle it very well in the public eye',
        points: 1,
        imageSrc:'/assets/images/presidents/campaign.png',
        history: 'People often vote for a president who handles things well',
        politicanInvolved: '',
        yearInvolved:'',
        normalFactDisplay: false,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Boon',
        description:'A big swing in the economy occurs',
        points: 1,
        imageSrc:'/assets/images/presidents/campaign.png',
        history: 'The Economy is often one of the biggest things voters look at during an election',
        politicanInvolved: '',
        yearInvolved:'',
        normalFactDisplay: false,
        statesInvolved: [],
        choiceEvent: false
      },
    ];
    return results;
  }
}
