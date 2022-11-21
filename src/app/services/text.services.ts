/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../stores/State';


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

  public getEvents(): Event[] {
    const results: Event[] = [
      {
        title:'Endorsement',
        description:'You just received an endorsement from a popular governor. This will turn the National Climate in your favor! Roll to see how many points the National Climate will move.',
        rollMap:[1,1,2,2,3,3],
        imageSrc:'',
        rollMapDescription1:'1 or 2 will move polls +1, 3 or 4 will move polls +2',
        rollMapDescription2:'Rolling 5 or 6 will move the polls +3 points'
      },
      {
        title:'Hot Button Issue',
        description:'You and your opponent are asked to weigh in on a Hot Button Issue. How you respond will decide if the National Climate moves in your favor, or whether your opponent will benefit.',
        rollMap:[-1,-1,-1,1,1,1],
        imageSrc:'',
        rollMapDescription1:'1, 2, 3 will move polls -1 point',
        rollMapDescription2:'4, 5, 6 will move polls +1 point'
      },
      {
        title:'Media Tour',
        description:'Is all press good press? A top media outlet is talking about you. Roll to decide if this press helps you, or hurts you in the National Climate.',
        rollMap:[-1,-1,1,1,2,2],
        imageSrc:'',
        rollMapDescription1:'Rolling 1 or 2 will move the polls -1 point',
        rollMapDescription2:'3 or 4 will move polls +1, 5 or 6 will move polls +2'
      },
      {
        title:'Debate 1',
        description:'Hosted by Fox at a University in your opponent\'s home state.  All eyes are on you! Roll to see how your performance affects the national polls.',
        rollMap:[-1,-1,-1,1,1,1],
        imageSrc:'',
        rollMapDescription1:'1, 2, 3 will move polls -1 point',
        rollMapDescription2:'4, 5, 6 will move polls +1 point'
      },
      {
        title:'SuperPac',
        description:'Money, Money, Money. Special interest groups are pouring money into the race. Roll to see if this hurts your campaign, or gives you the boost you need.',
        rollMap:[-3,-2,-1,1,2,3],
        imageSrc:'',
        rollMapDescription1:'Lower rolls hurt you up to -3 points',
        rollMapDescription2:'Higher rolls benefit you up to +3 points'
      },
      {
        title:'Scandal',
        description:'Uh Oh! You were caught doing some not very presidential things... This could really hurt you in the polls... Roll to see how bad the damage is.',
        rollMap:[-1,-1,-2,-2,-3,-3],
        imageSrc:'',
        rollMapDescription1:'1 or 2 will move polls -1, 3 or 4 will move polls -2',
        rollMapDescription2:'Rolling 5 or 6 will move the polls -3 points'
      },
      {
        title:'Debate 2',
        description:'Hosted by ABC at a University in the important swing state of Nevada. All eyes are on you! Roll to see how your performance affects the national polls.',
        rollMap:[-1,-1,-1,1,1,1],
        imageSrc:'',
        rollMapDescription1:'1, 2, 3 will move polls -1 point',
        rollMapDescription2:'4, 5, 6 will move polls +1 point'
      },
      {
        title:'Endorsement',
        description:'You just received an endorsement from a former president. This will turn the National Climate in your favor! Roll to see how many points the National Climate will move.',
        rollMap:[1,1,2,2,3,3],
        imageSrc:'',
        rollMapDescription1:'1 or 2 will move polls +1, 3 or 4 will move polls +2',
        rollMapDescription2:'Rolling 5 or 6 will move the polls +3 points'
      },
      {
        title:'Debate 3',
        description:'Hosted by CNN. Many of tonights questions are taken from local concerned citizens. All eyes are on you! Roll to see how your performance affects the national polls.',
        rollMap:[-1,-1,-1,1,1,1],
        imageSrc:'',
        rollMapDescription1:'1, 2, 3 will move polls -1 point',
        rollMapDescription2:'4, 5, 6 will move polls +1 point'
      },
      {
        title:'Endorsement',
        description:'You just received an endorsement from a former president. This will turn the National Climate in your favor! Roll to see how many points the National Climate will move.',
        rollMap:[1,1,2,2,3,3],
        imageSrc:'',
        rollMapDescription1:'1 or 2 will move polls +1, 3 or 4 will move polls +2',
        rollMapDescription2:'Rolling 5 or 6 will move the polls +3 points'
      },
      {
        title:'Endorsement',
        description:'You just received an endorsement from a former president. This will turn the National Climate in your favor! Roll to see how many points the National Climate will move.',
        rollMap:[1,1,2,2,3,3],
        imageSrc:'',
        rollMapDescription1:'1 or 2 will move polls +1, 3 or 4 will move polls +2',
        rollMapDescription2:'Rolling 5 or 6 will move the polls +3 points'
      },
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

  public getAdvertisingResults(): string[] {
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

  public getOpponentActions(): string[] {
    const turns = [
      'Your Opponent Ran Fundraising!',
      'Your Opponent campaigned in Florida!  Made a difference of 2 in FL',
      'Your Opponent ran ads in Texas, but they had no effect!',
      'Your Opponent Ran Fundraising!',
      'Your Opponent ran ads in Texas, they made of difference of 2',
      'Your Opponent campaigned in North Carolina.  They made a difference of 3 in NC',
      'Your Opponent Ran Fundraising!',
      'Your Opponent ran ads in WI, IA, MI, OH and made a difference of 1 in those states.',
      'Your Opponent campaigned in Georgia and made a difference of 2 in GA',
      'Your Opponent Ran Fundraising!',
      'Your Opponent ran ads in New Mexico, Colorado, Nevada and Arizona.  Made a difference of 1 in those states.',
      'Your Opponent campaigned in Illinois and made a difference of 2 there',
      'Your Opponent Ran Fundraising!',
      'Your Opponent ran ads in New Mexico, Colorado, Nevada and Arizona, but made no difference!',
      'Your Opponent campaigned in Missouri and made a difference of 1 in that state.',
      'Your Opponent Ran Fundraising!',
      'Your Opponent ran ads in Texas and made a difference of 1 in TX',
      'Your Opponent Ran Fundraising!',
      'Your Opponent campaigned in California, and made a difference of 1 in CA',
      'Your Opponent ran ads in Texas but they made no difference!'];
    return turns;
  }
}
