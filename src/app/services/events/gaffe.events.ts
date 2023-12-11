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
        description:'You misremember a common saying',
        points: -4,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'During a speech in Nashville, Bush said: "There\'s an old saying in Tennessee - I know it\'s in Texas, probably in Tennessee - that says, fool me once, shame on - shame on you. Fool me - you can\'t get fooled again."',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2004',
        normalFactDisplay: true,
        statesInvolved: ['TN','TX'],
        choiceEvent: false
      },

//MIDDLE
      {
        title:'Gaffe',
        description:'One of your thoughts doesn\'t translate well into words during an interview',
        points: -2,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'During an event in South Carolina, Bush said “Rarely is the question asked, is our children learning?” during a discussion on education',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalFactDisplay: true,
        statesInvolved: ['SC','NC','GA'],
        choiceEvent: false
      },
      {
        title:'Gaffe',
        description:'Your opponent misspeaks during a speach',
        points: 2,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'During an event in Bentonville, Arkansas, Bush said "They misunderestimate me."',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalFactDisplay: true,
        statesInvolved: ['AR','MO','TX'],
        choiceEvent: false
      },
      {
        title:'Gaffe',
        description:'Your opponent says something silly',
        points: 1,
        normalFactDisplay: true,
        imageSrc:'/assets/images/presidents/40-reagan.jpg',
        history: 'Reagan\'s opponent, Walter Mondale, said "Mr. Reagan will raise you taxes and so will I!"',
        politicanInvolved: 'Ronald Reagan',
        yearInvolved:'1980',
        statesInvolved: ['VA', 'NC', 'PA', 'ME', 'WI'],
        choiceEvent: false
      },
      {
        title:'Gaffe',
        description:'Your opponent says something insensitive',
        points: 1,
        imageSrc:'/assets/images/presidents/44-obama.jpg',
        history: 'His opponent, Mitt Romney, said: "I\'m not concerned about the very poor."',
        politicanInvolved: 'Barack Obama',
        yearInvolved:'2012',
        normalFactDisplay: true,
        statesInvolved: ['IA','WV','FL','AZ'],
        choiceEvent: false
      },


    ];
    return results;
  }
}
