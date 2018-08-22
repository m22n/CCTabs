import { Pipe, PipeTransform } from '@angular/core';
import { Measure } from './measure';

@Pipe({name: 'measureFilter'})
export class MeasureFilterPipe implements PipeTransform {
  transform(measures: Measure[], searchTerm: string): Measure[] {
      
    return measures.filter(measure => measure.isMalware == true)
  }
}