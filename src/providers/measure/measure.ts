import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Measure } from '../../components/measures/measure';
import { MEASURES } from '../../components/measures/mock-measures';

/*
  Generated class for the MeasureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeasureProvider {

  getMeasures(): Measure[] {
    return MEASURES;
  }
  
  constructor() {}

}
