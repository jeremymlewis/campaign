export class State {
  name: string;
  protected: string;
  abbreviation: string;
  college: number;
  thirdPercent: number;
  demPercent: number;
  repPercent: number;
  leansDem: number;
  leansRep: number;
  decided: boolean;
  constructor(name: string, abbreviation: string,
              electoralVotes: number, demPercentage: number,
              repPercentage: number, decided?: boolean) {
    this.name = name;
    this.protected = '';
    this.thirdPercent = -1;
    this.abbreviation = abbreviation;
    this.college = electoralVotes;
    this.demPercent = demPercentage;
    this.repPercent = repPercentage;
    this.leansDem = demPercentage-repPercentage;
    this.leansRep = repPercentage-demPercentage;
    this.decided = decided || false;
  }
}

export class Event {
  title: string;
  description: string;
  points: number;
  imageSrc: string;
  history: string;
  politicanInvolved: string;
  yearInvolved: string;
  normalFactDisplay: boolean;
  statesInvolved: string[];
  statesInvolved2?: string[];
  choiceEvent: boolean;
  choiceText1?: string;
  choiceText2?: string;
  choicePoints1?: number;
  choicePoints2?: number;
}
