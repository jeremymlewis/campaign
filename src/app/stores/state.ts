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
  order: number;
  pollingError: number;
  constructor(name: string, abbreviation: string,
              electoralVotes: number, demPercentage: number,
              repPercentage: number, order?: number) {
    this.name = name;
    this.protected = '';
    this.thirdPercent = -1;
    this.abbreviation = abbreviation;
    this.college = electoralVotes;
    this.demPercent = demPercentage;
    this.repPercent = repPercentage;
    this.leansDem = demPercentage-repPercentage;
    this.leansRep = repPercentage-demPercentage;
    this.order = order || 0;
    this.pollingError = 0;
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
  choiceEvent?: boolean;
  diceEvent?: boolean;
  choiceText1?: string;
  choiceText2?: string;
  choicePoints1?: number;
  choicePoints2?: number;
}
