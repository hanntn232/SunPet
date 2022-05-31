import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  // ApexDataLabels,
  // ApexTitleSubtitle,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  // dataLabels: ApexDataLabels;
  // title: ApexTitleSubtitle;
  legend: ApexLegend;
};

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Mạng xã hội", "Công cụ tìm kiếm", "Chiến dịch quảng cáo", "Truy cập trực tiếp", "Khác"],
      title: {
        text: "Nguồn truy cập",
        align: "left",
        style: {
          fontSize: "22px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold"
        }
      },
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          },
          size: '60%'
        }
      ]
  }
}
}