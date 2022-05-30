
import { Component, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexGrid,
  ApexMarkers,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTooltip,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke; 
  grid: ApexGrid; 
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  colors: string[];
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent{
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Lượt xem ",
          data: [28, 29, 33, 36, 32, 32, 33, 30,37,50,42]
        },
        {
          name: "Lượt mua",
          data: [12, 11, 14, 18, 17, 13, 13, 20,19, 26, 32]
        }
      ],
      chart: {
        height: 350,
        type: "area",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      // colors: ["#77B6EA", "#545454"],
      dataLabels: {
        // enabled: true
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Hoạt động khách hàng",
        align: "left",
        style: {
          fontSize: "22px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold"
        }
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov","Dec"],
        title: {
          text: "Tháng",
          style: {
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold"
          }
        }
      },
      yaxis: {
        title: {
          text: "Lượt (nghìn)",
          style: {
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold"
          }
        },
        min: 5,
        max: 100
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }
}

