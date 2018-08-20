import { Component, OnInit } from '@angular/core';
import { Measure } from './measure';
import { MeasureProvider } from '../../providers/measure/measure';
import { PopoverController } from 'ionic-angular';
import { MeasurePage } from '../../pages/measure/measure';


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
     this.presentPopover();
   }

   presentPopover(){
    const popover = this.popoverCtrl.create(MeasurePage);
    popover.present();
   }

   ngOnInit() {
    this.getMeasures();
  }

  constructor( private measureProvider: MeasureProvider,
    public popoverCtrl: PopoverController) {}
}

