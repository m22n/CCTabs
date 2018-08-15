import { Component } from '@angular/core';

@Component({
  selector: 'evaluation',
  templateUrl: 'evaluation.html'
})
export class EvaluationComponent {

  public radarChartLabels:string[] = ['Schadsoftware', 'Systemeinbruch', 'Social Engineering', 'Missbrauch von Berechtigungen und Systemen', 'Diebstahl (Verlust) von mobilen Geräten oder Datenträgern'];
 
  public radarChartData:any = [
    {data: [75, 58, 34, 34, 42], label: 'Situation Awareness'},
    {data: [100, 100, 0, 50, 88], label: 'Non-Technical Skill Assessment'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() {  }

}