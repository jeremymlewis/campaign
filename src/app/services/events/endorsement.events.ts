/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../../stores/state';


@Injectable({providedIn: 'root'})
export class EndorsementEvents {
  //25 event cards
  public getEndorsementEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Endorsement',
        description:'Oprah, queen bee of TV, endorses your presidential nomination',
        points: 1,
        imageSrc:'/assets/images/presidents/44-obama.jpg',
        history: 'Oprah endorsed President Obama even before he told everyone he was running!',
        politicanInvolved: 'Barack Obama',
        yearInvolved:'2008',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false

      },
      {
        normalFactDisplay: true,
        title:'Endorsement',
        description:'You receive a grudgingly given endorsement from your former opponent',
        points: 2,
        imageSrc:'/assets/images/presidents/44-obama.jpg',
        history: 'After dropping out of the Democratic Primary, Hillary Clinton gave her endorsement to her former opponent.',
        politicanInvolved: 'Barack Obama',
        yearInvolved:'2008',
        statesInvolved: ['NY', 'IN'],
        choiceEvent: false
      },
      {
        normalFactDisplay: true,
        title:'Endorsement',
        description:'Your opponent has been endorsed by famous actor, George Clooney',
        points: -3,
        imageSrc:'/assets/images/presidents/44-obama.jpg',
        history: 'During an interview with "Good Morning America", Clooney praised the president-to-be and offered an endorsement.',
        politicanInvolved: 'Barack Obama',
        yearInvolved:'2008',
        statesInvolved: ['CA', 'FL'],
        choiceEvent: false
      },
      {
        normalFactDisplay: true,
        title:'Endorsement',
        description:'You have been endorsed by the Planned Parenthood Action Fund',
        points: 1,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'This was a big endorsement coming after referendums in Kansas and Ohio on reproductive rights',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2024',
        statesInvolved: ['KS','OH'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the NRA',
        points: 1,
        imageSrc:'/assets/images/presidents/45-donald-trump.png',
        history: 'This organization spent around $2.6 Million that year lobbying on firearm legislation',
        politicanInvolved: 'Donald Trump',
        yearInvolved:'2016',
        normalFactDisplay: true,
        statesInvolved: ['TX', 'MI', 'GA', 'ID', 'MT'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by Emily\'s List',
        points: 1,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'Reproductive rights are a central issue in the 2024 election',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2024',
        normalFactDisplay: true,
        statesInvolved: ['DE','CT','NM', 'KS'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponet has been endorsed by Planned Parenthood Action Fund',
        points: -1,
        imageSrc:'/assets/images/presidents/hillary_clinton.jpg',
        history: 'Reproductive rights were a central issue in the 2016 election',
        politicanInvolved: 'Hillary Clinton',
        yearInvolved:'2016',
        normalFactDisplay: true,
        statesInvolved: ['VA','MD','IA'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You are endorsed by a former president!',
        points: 1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'He was endorsed by his father, George H W Bush, who had held office 8 years earlier',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent is endorsed by a former president!',
        points: -1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'He was endorsed by his father, George H W Bush, who had held office 8 years earlier',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the Speaker of the House',
        points: 1,
        imageSrc:'/assets/images/presidents/39-carter.jpg',
        history: 'Speaker of the house Carl Albert publicly endorsed Carter\'s candidacy',
        politicanInvolved: 'Jimmy Carter',
        yearInvolved:'1976',
        normalFactDisplay: true,
        statesInvolved: ['ME','MT','NE','SC','UT', 'CO', 'CT', 'MS', 'LA'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by a large Newspaper in Ohio',
        points: 1,
        imageSrc:'/assets/images/presidents/40-reagan.jpg',
        history: 'Reagan was endorsed by "The Plain Dealer" of Clevand, Ohio',
        politicanInvolved: 'Ronald Reagan',
        yearInvolved:'1980',
        normalFactDisplay: true,
        statesInvolved: ['OH'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent has been endorsed by the governor of Michigan',
        points: -2,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'Bush was endorsed by the Governor of Michigan, John Engler',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalFactDisplay: true,
        statesInvolved: ['MI'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent has been endorsed by the governor of Pennsylvania',
        points: -2,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'Bush was endorsed by the Governor of Pennsylvania, Tom Ridge',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalFactDisplay: true,
        statesInvolved: ['PA'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the governor of California',
        points: 3,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'FDR was endorsed early on by the Governor of California, Hiran Johnson',
        politicanInvolved: 'Franklin D Roosevelt',
        yearInvolved:'1932',
        normalFactDisplay: true,
        statesInvolved: ['CA'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the governor of North Carolina',
        points: 2,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'Trump was endorsed early on by the Governor of North Carolina, Pat McCrory',
        politicanInvolved: 'Donald Trump',
        yearInvolved:'2016',
        normalFactDisplay: true,
        statesInvolved: ['NC'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent has been endorsed by the governor of North Carolina',
        points: -2,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'Trump was endorsed early on by the Governor of North Carolina, Pat McCrory',
        politicanInvolved: 'Donald Trump',
        yearInvolved:'2016',
        normalFactDisplay: true,
        statesInvolved: ['NC'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent has been endorsed by the governor of Colorado',
        points: -2,
        imageSrc:'/assets/images/presidents/42-clinton.jpg',
        history: 'Colorado Governor Roy Rudolf Romer was a national co-chairman of Clinton\'s campaign',
        politicanInvolved: 'Bill Clinton',
        yearInvolved:'1996',
        normalFactDisplay: true,
        statesInvolved: ['CO'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the governor of Arizona',
        points: 1,
        imageSrc:'/assets/images/presidents/44-obama.jpg',
        history: 'Janet Napolitano, Governor of Arizona, endorsed Barack Obama 10 months before the election took place',
        politicanInvolved: 'Barack Obama',
        yearInvolved:'2008',
        normalFactDisplay: true,
        statesInvolved: ['AZ'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by a former vice president',
        points: 1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'Former Vice President Dan Quayle gave his endorsement to this member of his party',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalFactDisplay: true,
        statesInvolved: ['CA','OR','WA','PA','NC','TN','WI','FL'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the Mayor of Austin, TX',
        points: 2,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'Joe Biden was endorsed by Steve Adler, the Mayor of Austin',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2020',
        normalFactDisplay: true,
        statesInvolved: ['TX'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the Mayor of Atlanta, GA',
        points: 2,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'Joe Biden was endorsed by Keisha Lance Bottoms, the Mayor of Atlanta, GA',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2020',
        normalFactDisplay: true,
        statesInvolved: ['GA'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the Mayor of Cincinnati, OH',
        points: 2,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'Joe Biden was endorsed by John Cranley, the Mayor of Cincinnati, Ohio',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2020',
        normalFactDisplay: true,
        statesInvolved: ['OH'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent has been endorsed by the Mayor of Salt Lake City',
        points: -3,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'Joe Biden was endorsed by Erin Mendenhall, the Mayor of Salt Lake City',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2020',
        normalFactDisplay: true,
        statesInvolved: ['UT'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent has been endorsed by the Mayor of Milwaukee, WI',
        points: -2,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'Joe Biden was endorsed by Tom Barrett, the Mayor of Milwaukee, WI',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2020',
        normalFactDisplay: true,
        statesInvolved: ['WI'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent has been endorsed by the Governor of Indiana',
        points: -2,
        imageSrc:'/assets/images/presidents/45-donald-trump.png',
        history: 'Donald Trump was endorsed by Mike Pence, the Governor of IN, an Pence eventually became his Vice President!',
        politicanInvolved: 'Donald Trump',
        yearInvolved:'2016',
        normalFactDisplay: true,
        statesInvolved: ['IN'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by The American Federation of Teachers',
        points: 1,
        imageSrc:'/assets/images/presidents/42-clinton.jpg',
        history: 'Education is often a top issue that voters care about.',
        politicanInvolved: 'Bill Clinton',
        yearInvolved:'1996',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent has been endorsed by The American Federation of Teachers',
        points: -1,
        imageSrc:'/assets/images/presidents/42-clinton.jpg',
        history: 'Education is often a top issue that voters care about.',
        politicanInvolved: 'Bill Clinton',
        yearInvolved:'1996',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'Your opponent has been endorsed by a Grassroots Organization',
        points: -1,
        imageSrc:'/assets/images/presidents/34-eisenhower.jpg',
        history: 'A group called Citizens for Eisenhower helped raise money for his campaign.',
        politicanInvolved: 'Dwight Eisenhower',
        yearInvolved:'1952',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by a Grassroots Organization',
        points: 1,
        imageSrc:'/assets/images/presidents/34-eisenhower.jpg',
        history: 'A group called Citizens for Eisenhower helped raise money for his campaign.',
        politicanInvolved: 'Dwight Eisenhower',
        yearInvolved:'1952',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
    ];
    return results;
  }
}
