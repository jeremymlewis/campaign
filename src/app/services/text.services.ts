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
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Scandal',
        description:'Your campaign manager is arrested',
        points: -2,
        imageSrc:'',
        history: '',
        politicanInvolved: '',
        yearInvolved:'',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Scandal',
        description:'A leak from private fundraising event reveals some bad comments you made',
        points: -2,
        imageSrc:'',
        history: '',
        politicanInvolved: '',
        yearInvolved:'',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Scandal',
        description:'An embarrasing photo from college resurfaces',
        points: -2,
        imageSrc:'',
        history: '',
        politicanInvolved: '',
        yearInvolved:'',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Scandal',
        description:'Media discovers that you were unfaithful to your spouse',
        points: -2,
        imageSrc:'',
        history: '',
        politicanInvolved: '',
        yearInvolved:'',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
      },
      {
        title:'Scandal',
        description:'A company you are associated with has an embezzlement scandal',
        points: -2,
        imageSrc:'',
        history: '',
        politicanInvolved: '',
        yearInvolved:'',
        normalFactDisplay: true,
        statesInvolved: [],
        choiceEvent: false
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
        points: -1,
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

  // public getNeutralizationEvents(): Event[] {
  //   const results: Event[] = [
  //     {
  //       title:'Neutralization',
  //       description:'Republican Stronghold North Dakota has become a swing state',
  //       points: 0,
  //       imageSrc:'/assets/images/presidents/44-obama.jpg',
  //       history: '',
  //       politicanInvolved: '',
  //       yearInvolved:'',
  //       normalFactDisplay: false,
  //       statesInvolved: ['ND'],
  //     },
  //     {
  //       title:'Neutralization',
  //       description:'Democratic Stronghold Vermont has become a swing state',
  //       points: 0,
  //       imageSrc:'/assets/images/presidents/44-obama.jpg',
  //       history: '',
  //       politicanInvolved: '',
  //       yearInvolved:'',
  //       normalFactDisplay: false,
  //       statesInvolved: ['VT'],
  //     },
  //     {
  //       title:'Neutralization',
  //       description:'Republican Stronghold Tennessee has become a swing state',
  //       points: 0,
  //       imageSrc:'/assets/images/presidents/44-obama.jpg',
  //       history: '',
  //       politicanInvolved: '',
  //       yearInvolved:'',
  //       normalFactDisplay: false,
  //       statesInvolved: ['TN'],
  //     },
  //     {
  //       title:'Neutralization',
  //       description:'Democratic Stronghold Massachusets has become a swing state',
  //       points: 0,
  //       imageSrc:'/assets/images/presidents/44-obama.jpg',
  //       history: '',
  //       politicanInvolved: '',
  //       yearInvolved:'',
  //       normalFactDisplay: false,
  //       statesInvolved: ['MA'],
  //     }
  //   ];
  //   return results;
  // }

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
        description:'You have been endorsed by famous actor, George Clooney',
        points: 3,
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
        statesInvolved: ['DE','CT','NM'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by Planned Parenthood Action Fund',
        points: 1,
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
        description:'You have been endorsed by the Speaker of the House',
        points: 1,
        imageSrc:'/assets/images/presidents/39-carter.jpg',
        history: 'Speaker of the house Carl Albert publicly endorsed Carter\'s candidacy',
        politicanInvolved: 'Jimmy Carter',
        yearInvolved:'1976',
        normalFactDisplay: true,
        statesInvolved: ['ME','MT','NE','SC','UT'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the governor of Ohio',
        points: 2,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'FDR was endorsed early on by the Governor of California, Hiran Johnson',
        politicanInvolved: 'Franklin D Roosevelt',
        yearInvolved:'1932',
        normalFactDisplay: true,
        statesInvolved: ['OH'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the governor of Florida',
        points: 2,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'FDR was endorsed early on by the Governor of California, Hiran Johnson',
        politicanInvolved: 'Franklin D Roosevelt',
        yearInvolved:'1932',
        normalFactDisplay: true,
        statesInvolved: ['FL'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the governor of North Carolina',
        points: 2,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'FDR was endorsed early on by the Governor of California, Hiran Johnson',
        politicanInvolved: 'Franklin D Roosevelt',
        yearInvolved:'1932',
        normalFactDisplay: true,
        statesInvolved: ['NC'],
        choiceEvent: false
      },
      {
        title:'Endorsement',
        description:'You have been endorsed by the governor of Arizona',
        points: 1,
        imageSrc:'/assets/images/presidents/32-roosevelt.jpg',
        history: 'FDR was endorsed early on by the Governor of California, Hiran Johnson',
        politicanInvolved: 'Franklin D Roosevelt',
        yearInvolved:'1932',
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
        statesInvolved: ['CA','OR','WA','PA','NC','TN','WI'],
        choiceEvent: false
      },

    ];
    return results;
  }

  public getSuperPacEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for you in Michigan and Illinois',
        points: 3,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['MI', 'IL'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for your opponent in Georgia and Mississippi',
        points: -3,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['MS', 'GA'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for your opponent in the South West',
        points: -2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['NM', 'AZ', 'TX', 'NV'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for you in the South West',
        points: 2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['NM', 'AZ', 'TX', 'NV'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for you in Maine and New Hampshire',
        points: 3,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['ME', 'NH'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for your opponent in Maine and New Hampshire',
        points: -2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['ME', 'NH'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for your opponent in Oregon and Washington',
        points: -4,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['MI', 'IL'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for you in the Carolinas',
        points: 2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['SC', 'NC'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for you in Hawaii and Alaska',
        points: 2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['HI', 'AK'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for your opponent in Hawaii and Alaska',
        points: -2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['HI', 'AK'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for you in Wisconsin and Minnesota',
        points: 3,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['WI', 'MN'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for your opponent in Wisconsin and Minnesota',
        points: -2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['WI', 'MN'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for you in Missouri, Arkansas and Louisianna',
        points: 2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['MO', 'AR', 'LA'],
        choiceEvent: false
      },
    ];
    return results;
  }

  public getMediaTourEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Media Tour',
        description:'A National TV show covers you story',
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
        description:'A National Radio show covers your story',
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
        description:'A popular website runs a story on you',
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

  public getHotButtonEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Hot Button Issue',
        description:'Border Security',
        points: 1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'People want to know your position on Border Security',
        politicanInvolved: '',
        yearInvolved:'2004',
        normalFactDisplay: false,
        statesInvolved: ['CA', 'AZ', 'NM', 'TX'],
        statesInvolved2: ['NJ', 'NH', 'FL', 'CO'],
        choiceEvent: true,
        choiceText1: 'More Border Patrol',
        choiceText2: 'Less Border Patrol',
        choicePoints1: 2,
        choicePoints2: -1,
      },
      {
        title:'Hot Button Issue',
        description:'Car Company Bailout',
        points: 1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'Your position on Car Company Bailout is very popular in midwest states',
        politicanInvolved: '',
        yearInvolved:'2004',
        normalFactDisplay: false,
        statesInvolved: ['MI', 'WI', 'PA'],
        statesInvolved2: ['MI', 'WI', 'PA'],
        choiceEvent: true,
        choiceText1: 'Bail out car company',
        choiceText2: 'Don\'t Support Bail Out',
        choicePoints1: 2,
        choicePoints2: -1,
      },
      {
        title:'Hot Button Issue',
        description:'Coal Mining',
        points: 2,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'People in Appalacian states want to know if you prefer Coal Mining or Green Energy',
        politicanInvolved: '',
        yearInvolved:'2004',
        normalFactDisplay: false,
        statesInvolved: ['WV', 'KY', 'PA'],
        statesInvolved2: ['ID', 'VA', 'ME'],
        choiceEvent: true,
        choiceText1: 'Support Mining',
        choiceText2: 'Suport Green Energy',
        choicePoints1: 2,
        choicePoints2: 2,
      },
      {
        title:'Hot Button Issue',
        description:'Water Conservation',
        points: 1,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'A South Western governor want the Federal Gov to spend more on Dams and Water Conservation',
        politicanInvolved: '',
        yearInvolved:'2004',
        normalFactDisplay: false,
        statesInvolved: ['NV', 'UT', 'AZ', 'WY'],
        statesInvolved2: ['NV', 'UT', 'AZ', 'WY'],
        choiceEvent: true,
        choiceText1: 'Spend More',
        choiceText2: 'Ignore calls for spending',
        choicePoints1: 2,
        choicePoints2: -1,
      },
      {
        title:'Hot Button Issue',
        description:'The Mississipi River Has Flooded!',
        points: 2,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'A reporter asks whether you support taking money from the defense budget to give aid to effected states.',
        politicanInvolved: '',
        yearInvolved:'2004',
        normalFactDisplay: false,
        statesInvolved: ['MS', 'MO', 'LA', 'AR', 'TN'],
        statesInvolved2: ['MS', 'MO', 'LA', 'AR', 'TN'],
        choiceEvent: true,
        choiceText1: 'Give money to flooded states',
        choiceText2: 'Keep money in defense budget',
        choicePoints1: 2,
        choicePoints2: -1,
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
        title:'Hot Button Issue',
        description:'Car Company Bailout',
        points: 2,
        imageSrc:'/assets/images/presidents/43-bush.jpg',
        history: 'Your position on Car Company Bailout is very popular in midwest states',
        politicanInvolved: '',
        yearInvolved:'2004',
        normalFactDisplay: false,
        statesInvolved: ['MI', 'WI', 'PA'],
        choiceEvent: true
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
      'It is your first turn! Each week you get to choose 1 action. Take your turn by clicking on one of the options below. Your opponent will go next.',
      'Good job in Week 1! Tap the Map/Polls icon at the bottom of the page to see how you are doing in the Polls.',
      'Welcome to Week 3! After this week, a SPECIAL EVENT will happen. SPECIAL EVENTS influence the Polls in interesting ways.',
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
