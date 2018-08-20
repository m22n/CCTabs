import { Component, OnInit } from '@angular/core';
import { Measure } from './measure';
import { MeasureProvider } from '../../providers/measure/measure';


@Component({
  selector: 'measures',
  templateUrl: 'measures.html'
})

export class MeasuresComponent implements OnInit{

   measures: Measure[];
   selectedMeasure: Measure;

   getMeasures(): void{
     this.measures = this.measureProvider.getMeasures();
   }

   onSelect(measure: Measure): void {
     this.selectedMeasure = measure;
   }

   ngOnInit() {
    this.getMeasures();
  }

  constructor( private measureProvider: MeasureProvider) {}
}

