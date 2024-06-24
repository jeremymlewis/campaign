/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../../data-store/state';


@Injectable({providedIn: 'root'})
export class PacEvents {
  public getSuperPacEvents(): Event[] {
    //15 event cards (25 goal)
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
        description:'A Politcal Action Group ran ads for your opponent in Virginia and West Virginia',
        points: -2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['VA', 'WV'],
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
        statesInvolved: ['OR', 'WA'],
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
        description:'A Politcal Action Group ran ads for your opponent in Florida',
        points: -3,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['FL'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for your opponent in Texas',
        points: -2,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['TX'],
        choiceEvent: false
      },
      {
        title:'Super Pac',
        description:'A Politcal Action Group ran ads for you in Wisconsin and Minnesota',
        points: 2,
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
        points: -3,
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
        description:'A Politcal Action Group ran ads for your opponent in Colorado and Nevada',
        points: -3,
        imageSrc:'/assets/images/presidents/campaign.png',
        normalFactDisplay: false,
        history: 'Super Pacs affect elections with money',
        politicanInvolved: '',
        yearInvolved:'',
        statesInvolved: ['CO', 'NV'],
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
}
