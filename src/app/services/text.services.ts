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
        title:'Gaffes',
        description:'',
        rollMap:[-1,-1,-2,-2,-3,-3],
        imageSrc:''
      },
      {
        title:'Media Tour',
        description:'',
        rollMap:[-1,-1,1,1,2,2],
        imageSrc:''
      },
      {
        title:'SuperPac',
        description:'',
        rollMap:[-3,-2,-1,1,2,3],
        imageSrc:''
      },
      {
        title:'Scandal',
        description:'',
        rollMap:[-1,-2,-3,-4,-5,-6],
        imageSrc:''
      },
      {
        title:'Endorsement',
        description:'',
        rollMap:[1,1,2,2,3,3],
        imageSrc:''
      },
      {
        title:'Hot Button Issue',
        description:'',
        rollMap:[-1,-1,-1,1,1,1],
        imageSrc:''
      },
      {
        title:'Debate 1',
        description:'',
        rollMap:[],
        imageSrc:''
      },
      {
        title:'Debate 2',
        description:'',
        rollMap:[],
        imageSrc:''
      },
      {
        title:'Debate 3',
        description:'',
        rollMap:[],
        imageSrc:''
      },
    ];
    return results;
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
