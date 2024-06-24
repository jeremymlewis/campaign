import { Pipe, PipeTransform } from '@angular/core';
import { State } from './data-store/state';

@Pipe({
  name: 'scoreDisplay'
})
export class ScoreDisplayPipe implements PipeTransform {

  transform(state: State): string {
    if (state.thirdPercent > -1) {
      return state.thirdPercent + '%';
    } else {
      const val = state.demPercent - state.repPercent;
      if (val > 0) {
        return '+' + val + ' D';
      } else if (val === 0) {
        return 'Even';
      } else if (val < 0) {
        return '+' + (-val) + ' R';
      }
    }
  }
}
