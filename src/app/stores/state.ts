export class State {
  constructor(abbreviation: string, electoralVotes: number, demPercentage: number, repPercentage: number, decided?: boolean) {
    this.abbreviation = abbreviation;
    this.college = electoralVotes;
    this.demPercent = demPercentage;
    this.repPercent = repPercentage;
    this.leansDem = demPercentage-repPercentage;
    this.leansRep = repPercentage-demPercentage;
    this.decided = decided || false;
  }
  abbreviation: string;
  college: number;
  demPercent: number;
  repPercent: number;
  leansDem: number;
  leansRep: number;
  decided: boolean;
}
