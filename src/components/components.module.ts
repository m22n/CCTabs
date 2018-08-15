import { NgModule } from '@angular/core';
import { MeasuresComponent } from './measures/measures';
import { EvaluationComponent } from './evaluation/evaluation';

@NgModule({
	declarations: [MeasuresComponent,
    EvaluationComponent],
	imports: [],
	exports: [MeasuresComponent,
    EvaluationComponent]
})
export class ComponentsModule {}
