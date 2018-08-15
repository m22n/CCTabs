import { Component } from '@angular/core';
import { Measure } from './measure';

@Component({
  selector: 'measures',
  templateUrl: 'measures.html'
})
export class MeasuresComponent {

  id: number;
  name: String;

  measure: Measure = {
    id: 1,
    name: 'Restrict administrative privileges'
  }

  constructor() {}
}

