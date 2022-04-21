// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-line-chart',
//   templateUrl: './line-chart.component.html',
//   styleUrls: ['./line-chart.component.css']
// })
// export class LineChartComponent implements OnInit {

//   series: apex.ApexAxisChartSeries;
//   chart: apex.ApexChart;
//   xaxis: apex.ApexXAxis;
//   dataLabels: apex.ApexDataLabels;
//   grid: apex.ApexGrid;
//   stroke: apex.ApexStroke;
//   title: apex.ApexTitleSubtitle;

//   constructor() { }

//   ngOnInit(): void {
//     this.initializeChartOptions();
//   }

//   private initializeChartOptions(): void {
//     this.title = {
//       text: 'Product Trends by Month',
//       align: "left"
//     };
//     this.series = [
//       {
//         name: "Desktops",
//         data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//       }
//     ];
//     this.chart = {
//       height: 350,
//       type: "line",
//       zoom: {
//         enabled: false
//       }
//     };
//     this.dataLabels = {
//       enabled: false
//     };
//     this.stroke=  {
//       curve: "straight"
//     };
//     this.grid= {
//       row: {
//         colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//           opacity: 0.5
//       }
//     };
//     this.xaxis=  {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep"
//       ]
//     }
//   };
// }

// }
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
  ApexLegend
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
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      chart: {
        height: 350,
        type: "line",
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
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Average High & Low Temperature",
        align: "left"
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
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "Temperature"
        },
        min: 5,
        max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

    //   chart: {
    //     height: 350,
    //     type: "line",
    //     zoom: {
    //       enabled: false
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   stroke: {
    //     curve: "straight"
    //   },
    //   title: {
    //     text: "Product Trends by Month",
    //     align: "left"
    //   },
    //   grid: {
    //     row: {
    //       colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
    //       opacity: 0.5
    //     }
    //   },
    //   xaxis: {
    //     categories: [
    //       "Jan",
    //       "Feb",
    //       "Mar",
    //       "Apr",
    //       "May",
    //       "Jun",
    //       "Jul",
    //       "Aug",
    //       "Sep"
    //     ]
    //   }
    // };
  }
}



// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   stroke: ApexStroke;
//   dataLabels: ApexDataLabels;
//   markers: ApexMarkers;
//   colors: string[];
//   yaxis: ApexYAxis;
//   grid: ApexGrid;
//   legend: ApexLegend;
//   title: ApexTitleSubtitle;
// };

// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.css"]
// })
// export class AppComponent {
//   @ViewChild("chart") chart: ChartComponent;
//   public chartOptions: Partial<ChartOptions>;

//   constructor() {
//     this.chartOptions = {
//       series: [
//         {
//           name: "High - 2013",
//           data: [28, 29, 33, 36, 32, 32, 33]
//         },
//         {
//           name: "Low - 2013",
//           data: [12, 11, 14, 18, 17, 13, 13]
//         }
//       ],
//       chart: {
//         height: 350,
//         type: "line",
//         dropShadow: {
//           enabled: true,
//           color: "#000",
//           top: 18,
//           left: 7,
//           blur: 10,
//           opacity: 0.2
//         },
//         toolbar: {
//           show: false
//         }
//       },
//       colors: ["#77B6EA", "#545454"],
//       dataLabels: {
//         enabled: true
//       },
//       stroke: {
//         curve: "smooth"
//       },
//       title: {
//         text: "Average High & Low Temperature",
//         align: "left"
//       },
//       grid: {
//         borderColor: "#e7e7e7",
//         row: {
//           colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//           opacity: 0.5
//         }
//       },
//       markers: {
//         size: 1
//       },
//       xaxis: {
//         categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//         title: {
//           text: "Month"
//         }
//       },
//       yaxis: {
//         title: {
//           text: "Temperature"
//         },
//         min: 5,
//         max: 40
//       },
//       legend: {
//         position: "top",
//         horizontalAlign: "right",
//         floating: true,
//         offsetY: -25,
//         offsetX: -5
//       }
//     };
//   }
// }
