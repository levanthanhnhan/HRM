import { Component, Inject } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartFontOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  constructor(
    private _http: HttpClient,
    @Inject('BASE_URL') private _baseUrl: string) {
  }

  ngOnInit(): void {
    this.getStaffByYear();
  }

  getStaffByYear() {
    return this._http.get(this._baseUrl + "api/Staff/GetStaffByYear").subscribe(res => {
      const _arrYear = []
      const _arrCount = []

      Object.keys(res).map(function (idx) {
        _arrYear.push(res[idx].year);
        _arrCount.push(res[idx].count);
      });

      this.lineChartData = [
        { data: _arrCount, label: 'Staff' },
      ];
      this.lineChartLabels = _arrYear;
    })
  }

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Staff' },
  ];

  lineChartLabels: Label[] = [];

  lineChartOptions: ChartOptions = {
    responsive: true,
    showLines: true,
  };

  lineChartFontOptions: ChartFontOptions = {
    defaultFontFamily: 'Nunito, Segoe UI, Roboto, Helvetica Neue, Arial,sans-serif'
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(78, 115, 223, 1)',
      backgroundColor: 'rgba(78, 115, 223, 0.05)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
}
