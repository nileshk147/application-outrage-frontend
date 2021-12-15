import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

// import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-application-graph',
  templateUrl: './application-graph.component.html',
  styleUrls: ['./application-graph.component.scss']
})
export class ApplicationGraphComponent implements OnInit {
  allLabel: Label[] = [];

  ngOnInit(): void {
    this.allLabel = this.barChartLabels;
    console.log('sdklfjsdf', this.barChartData)
  }

  @Output() filterGraphData = new EventEmitter();

  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];


  public barChartOptions: ChartOptions = {
    responsive: true
  };
  // public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40]},
  // ];

  filterGraph($event: any){

    this.filterGraphData.emit($event.target.value);

  }
}
