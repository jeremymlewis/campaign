/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../../stores/state';


@Injectable({providedIn: 'root'})
export class GaffeEvents {
  public getGaffeEvents(): Event[] {
    //5 event cards
    const results: Event[] = [
      {
        title:'Gaffe',
        description:'One of your thoughts doesn\'t translate well into words during an interview',
        points: -1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'During an event in Michigan, Bush said “The human and the fish can coexist peacefully” during a discussion on energy',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalFactDisplay: true,
        statesInvolved: ['MI','PA','WI','OH','IL'],
        choiceEvent: false
      },
      {
        title:'Gaffe',
        description:'One of your opponent\'s thoughts doesn\'t translate well into words during an interview',
        points: 1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'During an event in Michigan, Bush said “The human and the fish can coexist peacefully” during a discussion on energy',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalFactDisplay: true,
        statesInvolved: ['MI','PA','WI','OH','IL'],
        choiceEvent: false
      },
      {
        title:'Gaffe',
        description:'You say the wrong number during a speech',
        points: -1,
        normalFactDisplay: true,
        imageSrc:'/assets/images/presidents/44-obama.jpg',
        history: 'During a campaign speech in Oregon, Obama accidently said: "I\'ve now been to 57 states"',
        politicanInvolved: 'Barack Obama',
        yearInvolved:'2008',
        statesInvolved: ['OR','ID','MT','WA','UT','NV','OK'],
        choiceEvent: false
      },
      {
        title:'Gaffe',
        description:'You slip up while making a comparison during a speech',
        points: -2,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'During a speech in Iowa, Biden mispoke saying: "Poor kids are just as bright and just as talented as white kids" before immediately correcting himself',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2020',
        normalFactDisplay: true,
        statesInvolved: ['TX','CA','FL','PA','NC','NY','IL'],
        choiceEvent: false
      },
      {
        title:'Gaffe',
        description:'Your opponent misremembers a common saying',
        points: 1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'During a speech in Nashville, Bush said: "There\'s an old saying in Tennessee - I know it\'s in Texas, probably in Tennessee - that says, fool me once, shame on - shame on you. Fool me - you can\'t get fooled again."',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2004',
        normalFactDisplay: true,
        statesInvolved: ['TX','CA','FL','PA','NC','NY','IL'],
        choiceEvent: false
      },
    ];
    return results;
  }
}
