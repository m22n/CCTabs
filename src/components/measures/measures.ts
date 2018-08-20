import { Component } from '@angular/core';
import { Measure } from './measure';
import { MEASURES } from './mock-measures';


@Component({
  selector: 'measures',
  templateUrl: 'measures.html'
})

export class MeasuresComponent {

   measures = MEASURES;
   selectedMeasure: Measure;

   onSelect(measure: Measure): void {
     this.selectedMeasure = measure;
   }

  constructor() {}
}

