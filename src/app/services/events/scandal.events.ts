/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../../stores/state';


@Injectable({providedIn: 'root'})
export class ScandalEvents {

public getScandalEvents(): Event[] {
  //7 event cards (10 goal)
  const results: Event[] = [
    {
      title:'Scandal',
      description:'Your opponent spreads a bizarre rumour about you. Voters find this distasteful.',
      points: -2,
      imageSrc:'/assets/images/presidents/09-harrison.jpg',
      history: 'Known as "The Dead Cow Campaign", Harrison\'s opponent said that he was courtmartialed for killing a cow while in the military',
      politicanInvolved: 'William Henry Harrison',
      yearInvolved:'1840',
      normalFactDisplay: true,
      statesInvolved: [],
      choiceEvent: false
    },
    {
      title:'Scandal',
      description:'Your running mate accepted bribes.',
      points: -2,
      imageSrc:'/assets/images/presidents/18-grant.jpg',
      history: 'Known as "The Credit Mobilier Scandal", A railroad company gave Senators money in exchange for passing laws. These included Grant\'s Vice President',
      politicanInvolved: 'Ulysses S. Grant',
      yearInvolved:'1872',
      normalFactDisplay: true,
      statesInvolved: [],
      choiceEvent: false
    },
    {
      title:'Scandal',
      description:'Your opponent is revealed to have an illegitimate child',
      points: 2,
      imageSrc:'assets/images/presidents/22-24-cleveland.jpg',
      history: 'After discovering Cleveland had fathered a son out of wedlock, his opponent taunted him with the chant: "Ma, Ma, where\'s my Pa? In the White House Ha Ha Ha!" ',
      politicanInvolved: 'Grover Cleveland',
      yearInvolved:'1884',
      normalFactDisplay: true,
      statesInvolved: [],
      choiceEvent: false
    },
    {
      title:'Scandal',
      description:'A leak from private fundraising event reveals some bad comments you made',
      points: -2,
      imageSrc:'assets/images/presidents/44-obama.jpg',
      history: 'A leak from a fundraiser showed President Obama said: "People in rural areas are bitter about their lives and cling to their guns and religion."',
      politicanInvolved: 'Barack Obama',
      yearInvolved:'2012',
      normalFactDisplay: true,
      statesInvolved: [],
      choiceEvent: false
    },
    {
      title:'Scandal',
      description:'Your Cabinet Member\'s family life interferes with the election',
      points: 2,
      imageSrc:'assets/images/presidents/07-jackson.jpg',
      history: 'Called "The Petticoat Affair", Jackson\'s Secretary of War married an unpopular woman. Several Cabinet Members resigned after Jackson got angry with them for their reception of her.',
      politicanInvolved: 'Andrew Jackson',
      yearInvolved:'1832',
      normalFactDisplay: true,
      statesInvolved: [],
      choiceEvent: false
    },
    {
      title:'Scandal',
      description:'Media discovers that you were unfaithful to your spouse',
      points: -2,
      imageSrc:'assets/images/presidents/42-clinton.jpg',
      history: 'President Clinton had inappropriate relations with a White House intern, and lied under oath about it.',
      politicanInvolved: 'Bill Clinton',
      yearInvolved:'1996',
      normalFactDisplay: true,
      statesInvolved: [],
      choiceEvent: false
    },
    {
      title:'Scandal',
      description:'Your opponent\'s company has engaged in some shady practices.',
      points: 2,
      imageSrc:'assets/images/presidents/romney.jpg',
      history: 'A company Mitt Romney invested in was accused of causing a woman\'s death by firing her.',
      politicanInvolved: 'Mitt Romney',
      yearInvolved:'2012',
      normalFactDisplay: true,
      statesInvolved: [],
      choiceEvent: false
    },
  ];
  return results;
}

}
