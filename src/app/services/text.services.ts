/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../stores/state';


@Injectable({providedIn: 'root'})
export class TextService {


  public getCampaignResults(): string[] {
    const results = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6'
    ];
    return results;
  }

  public getDebateResults(): string[] {
    const results = [];
    return results;
  }

  //TODO jermy add events from Julies spreadsheet
  //https://docs.google.com/spreadsheets/d/1yP6gM0ZuIBHZIh7I--olHJp9dRAVWD300xbBQVGuFeQ/edit#gid=1533506833
  public getScandalEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Scandal',
        description:'Your opponent spreads a bizarre rumour about you. Voters find this distasteful.',
        points: -2,
        imageSrc:'/assets/images/presidents/09-harrison.jpg',
        history: 'Known as "The Dead Cow Campaign", Harrison\'s opponent said that he was courtmartialed for killing a cow while in the military',
        politicanInvolved: 'William Henry Harrison',
        yearInvolved:'1840',
        normalEvent: true,
      },
    ];
    return results;
  }

  public getGaffeEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Gaffe',
        description:'One of your thoughts doesn\'t translate well into words during an interview',
        points: -1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'During an event in Michigan, Bush said “The human and the fish can coexist peacefully” during a discussion on energy',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalEvent: true,
      },
      {
        title:'Gaffe',
        description:'You say the wrong number during a speech',
        points: -1,
        normalEvent: true,
        imageSrc:'/assets/images/presidents/44-obama.jpg',
        history: 'During a campaign speech in Oregon, Obama accidently said: "I\'ve now been to 57 states"',
        politicanInvolved: 'Barack Obama',
        yearInvolved:'2008',
      },
      {
        title:'Gaffe',
        description:'You slip up while making a comparison during a speech',
        points: -1,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'During a speech in Iowa, Biden mispoke saying: "Poor kids are just as bright and just as talented as white kids" before immediately correcting himself',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2020',
        normalEvent: true,
      },
      {
        title:'Gaffe',
        description:'You misremember a common saying',
        points: -1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'During a speech in Nashville, Bush said: "There\'s an old saying in Tennessee - I know it\'s in Texas, probably in Tennessee - that says, fool me once, shame on - shame on you. Fool me - you can\'t get fooled again."',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2004',
        normalEvent: true,
      },
    ];
    return results;
  }

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
        normalEvent: false,
      },
      {
        title:'Boon',
        description:'A close family member dies, and you handle it very well in the public eye',
        points: 1,
        imageSrc:'/assets/images/presidents/campaign.png',
        history: 'People often vote for a president who handles things well',
        politicanInvolved: '',
        yearInvolved:'',
        normalEvent: false,
      },
      {
        title:'Boon',
        description:'A big swing in the economy occurs',
        points: 1,
        imageSrc:'/assets/images/presidents/campaign.png',
        history: 'The Economy is often one of the biggest things voters look at during an election',
        politicanInvolved: '',
        yearInvolved:'',
        normalEvent: false,
      },
    ];
    return results;
  }

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
        normalEvent: true,

      },
      {
        normalEvent: true,
        title:'Endorsement',
        description:'You receive a grudgingly given endorsement from your former opponent',
        points: 1,
        imageSrc:'/assets/images/presidents/44-obama.jpg',
        history: 'After dropping out of the Democratic Primary, Hillary Clinton gave her endorsement to her former opponent.',
        politicanInvolved: 'Barack Obama',
        yearInvolved:'2008',
      },
      {
        normalEvent: true,
        title:'Endorsement',
        description:'You have been endorsed by famous actor, George Clooney',
        points: 2,
        imageSrc:'/assets/images/presidents/44-obama.jpg',
        history: 'During an interview with "Good Morning America", Clooney praised the president-to-be and offered an endorsement.',
        politicanInvolved: 'Barack Obama',
        yearInvolved:'2008',
      },
      {
        normalEvent: true,
        title:'Endorsement',
        description:'You have been endorsed by the Planned Parenthood Action Fund',
        points: 1,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'This was a big endorsement coming after referendums in Kansas and Ohio on reproductive rights',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2024',
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the NRA',
        points: 1,
        imageSrc:'/assets/images/presidents/45-donald-trump.png',
        history: 'This organization spent around $2.6 Million that year lobbying on firearm legislation',
        politicanInvolved: 'Donald Trump',
        yearInvolved:'2016',
        normalEvent: true,
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by Emily\'s List',
        points: 1,
        imageSrc:'/assets/images/presidents/46-joe-biden.png',
        history: 'Reproductive rights are a central issue in the 2024 election',
        politicanInvolved: 'Joe Biden',
        yearInvolved:'2024',
        normalEvent: true,
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by Planned Parenthood Action Fund',
        points: 1,
        imageSrc:'/assets/images/presidents/hillary_clinton.jpg',
        history: 'Reproductive rights were a central issue in the 2016 election',
        politicanInvolved: 'Hillary Clinton',
        yearInvolved:'2016',
        normalEvent: true,
      },
      {
        title:'Endorsement',
        description:'You are endorsed by a former president!',
        points: 2,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'He was endorsed by his father, George H W Bush, who had held office 8 years earlier',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalEvent: true,
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the Speaker of the House',
        points: 1,
        imageSrc:'/assets/images/presidents/39-carter.jpg',
        history: 'Speaker of the house Carl Albert publicly endorsed Carter\'s candidacy',
        politicanInvolved: 'Jimmy Carter',
        yearInvolved:'1976',
        normalEvent: true,
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the governor of a key state',
        points: 1,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'FDR was endorsed early on by the Governor of California, Hiran Johnson',
        politicanInvolved: 'Franklin D Roosevelt',
        yearInvolved:'1932',
        normalEvent: true,
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by a former vice president',
        points: 2,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'Former Vice President Dan Quayle gave his endorsement to this member of his party',
        politicanInvolved: 'George W Bush',
        yearInvolved:'2000',
        normalEvent: true,
      },

    ];
    return results;
  }

  public getMediaTourEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Media Tour',
        description:'You receive some free press as the media spends time covering your story',
        points: 2,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'FDR was the first president to appear on TV during the 1939 World\'s Fair',
        politicanInvolved: 'Franklin D Roosevelt',
        yearInvolved:'1940',
        normalEvent: true,
      },
      {
        title:'Media Tour',
        description:'You receive some free press as the media spends time covering your story',
        points: 2,
        imageSrc:'/assets/images/presidents/29-harding.jpg',
        history: 'He was the first president to talk over the radio, giving a speech at the dedication of the Lincoln monument',
        politicanInvolved: 'Warren G Harding',
        yearInvolved:'1920',
        normalEvent: true,
      },
      {
        title:'Media Tour',
        description:'You receive some free press as the media spends time covering your story',
        points: 2,
        imageSrc:'/assets/images/presidents/42-clinton.jpg',
        history: 'Bill Clinton was the president when the White House built their first website',
        politicanInvolved: 'Bill Clinton',
        yearInvolved:'1996',
        normalEvent: true,
      }
    ];
    return results;
  }

  public getHotButtonEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Hot Button Issue',
        description:'Border Security',
        points: 1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'I am not sure how to handle Hot Button issues yet... This is a TEST',
        politicanInvolved: 'George Bush',
        yearInvolved:'2004',
        normalEvent: true,
      },
    ];
    return results;
  }

  public getEndingEvents(): Event[] {
    const results: Event[] = [];
    return results;
  }

  public getEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Endorsement',
        description:'',
        points: 0,
        imageSrc:'',
        history: '',
        politicanInvolved: '',
        yearInvolved:'',
        normalEvent: true,
      },
      // {
      //   title:'Hot Button Issue',
      //   description:'You and your opponent are asked to weigh in on a Hot Button Issue. How you respond will decide if the National Climate moves in your favor, or whether your opponent will benefit.',
      //   rollMap:[-1,-1,-1,1,1,1],
      //   imageSrc:'',
      //   rollMapDescription1:'1, 2, 3 will move polls -1 point',
      //   rollMapDescription2:'4, 5, 6 will move polls +1 point'
      // },
      // {
      //   title:'Media Tour',
      //   description:'Is all press good press? A top media outlet is talking about you. Roll to decide if this press helps you, or hurts you in the National Climate.',
      //   rollMap:[-1,-1,1,1,2,2],
      //   imageSrc:'',
      //   rollMapDescription1:'Rolling 1 or 2 will move the polls -1 point',
      //   rollMapDescription2:'3 or 4 will move polls +1, 5 or 6 will move polls +2'
      // },
      // {
      //   title:'Debate 1',
      //   description:'Hosted by Fox at a University in your opponent\'s home state.  All eyes are on you! Roll to see how your performance affects the national polls.',
      //   rollMap:[-1,-1,-1,1,1,1],
      //   imageSrc:'',
      //   rollMapDescription1:'1, 2, 3 will move polls -1 point',
      //   rollMapDescription2:'4, 5, 6 will move polls +1 point'
      // },
      // {
      //   title:'SuperPac',
      //   description:'Money, Money, Money. Special interest groups are pouring money into the race. Roll to see if this hurts your campaign, or gives you the boost you need.',
      //   rollMap:[-3,-2,-1,1,2,3],
      //   imageSrc:'',
      //   rollMapDescription1:'Lower rolls hurt you up to -3 points',
      //   rollMapDescription2:'Higher rolls benefit you up to +3 points'
      // },
      // {
      //   title:'Scandal',
      //   description:'Uh Oh! You were caught doing some not very presidential things... This could really hurt you in the polls... Roll to see how bad the damage is.',
      //   rollMap:[-1,-1,-2,-2,-3,-3],
      //   imageSrc:'',
      //   rollMapDescription1:'1 or 2 will move polls -1, 3 or 4 will move polls -2',
      //   rollMapDescription2:'Rolling 5 or 6 will move the polls -3 points'
      // },
      // {
      //   title:'Debate 2',
      //   description:'Hosted by ABC at a University in the important swing state of Nevada. All eyes are on you! Roll to see how your performance affects the national polls.',
      //   rollMap:[-1,-1,-1,1,1,1],
      //   imageSrc:'',
      //   rollMapDescription1:'1, 2, 3 will move polls -1 point',
      //   rollMapDescription2:'4, 5, 6 will move polls +1 point'
      // },
      // {
      //   title:'Endorsement',
      //   description:'You just received an endorsement from a former president. This will turn the National Climate in your favor! Roll to see how many points the National Climate will move.',
      //   rollMap:[1,1,2,2,3,3],
      //   imageSrc:'',
      //   rollMapDescription1:'1 or 2 will move polls +1, 3 or 4 will move polls +2',
      //   rollMapDescription2:'Rolling 5 or 6 will move the polls +3 points'
      // },
      // {
      //   title:'Debate 3',
      //   description:'Hosted by CNN. Many of tonights questions are taken from local concerned citizens. All eyes are on you! Roll to see how your performance affects the national polls.',
      //   rollMap:[-1,-1,-1,1,1,1],
      //   imageSrc:'',
      //   rollMapDescription1:'1, 2, 3 will move polls -1 point',
      //   rollMapDescription2:'4, 5, 6 will move polls +1 point'
      // },
      // {
      //   title:'Endorsement',
      //   description:'You just received an endorsement from a hall of fame MLB player! This will turn the National Climate in your favor! Roll to see how many points the National Climate will move.',
      //   rollMap:[1,1,2,2,3,3],
      //   imageSrc:'',
      //   rollMapDescription1:'1 or 2 will move polls +1, 3 or 4 will move polls +2',
      //   rollMapDescription2:'Rolling 5 or 6 will move the polls +3 points'
      // },
      // {
      //   title:'Scandal',
      //   description:'Uh Oh! You were caught doing some not very presidential things... This could really hurt you in the polls... Roll to see how bad the damage is.',
      //   rollMap:[-1,-1,-2,-2,-3,-3],
      //   imageSrc:'',
      //   rollMapDescription1:'1 or 2 will move polls -1, 3 or 4 will move polls -2',
      //   rollMapDescription2:'Rolling 5 or 6 will move the polls -3 points'
      // },
    ];
    return results;

    /*     {
      title:'Gaffes',
      description:'',
      rollMap:[-1,-1,-2,-2,-3,-3],
      imageSrc:''
    },
    */
  }

  public getTurns(): string[] {
    const turns = [
      'It is your first turn! Each round you get two turns. Take your turn by clicking on one of the options below. Note that you have to fundraise before you can run ads.',
      'It is your second turn of the round!',
      'It is your first turn of round 2!',
      'It is your second turn of the round!',
      'It is your first turn of the round 3!',
      'It is your second turn of the round. After this turn comes the first presidential debate...',
      'It is your first turn of the round 4!',
      'It is your second turn of the round!',
      'It is your first turn of the round 5!',
      'It is your second turn of the round!',
      'It is your first turn of the round 6!',
      'It is your second turn of the round!  After this turn comes the second presidential debate...',
      'It is your first turn of the round 7!',
      'It is your second turn of the round!',
      'It is your first turn of the round 8!',
      'It is your second turn of the round!',
      'It is your first turn of the round 9!',
      'It is your second turn of the round!  After this turn comes the last presidential debate...',
      'It is your first turn of the last round!',
      'It is your final turn of the game!',
      'Opponent Campaigned',
      'Opponent Ran Ads',
      'Opponent Fundraised'];
    return turns;
  }

}
