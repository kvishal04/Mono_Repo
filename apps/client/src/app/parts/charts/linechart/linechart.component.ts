import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';


@Component({
  selector: 'app-linechart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.scss'
})
export class LinechartComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area', // Set the chart type to area
        height: 200,
        zoom: { enabled: false },
        toolbar: { show: false }, // Hide toolbar
      },
      stroke: {
        curve: 'smooth', // Smooth curve
        width: 2, // Line width
      },
      series: [
        {
          name: 'Performance',
          data: [70, 50, 60, 100, 65, 70, 60],
        },
      ],
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: '#4B5C76', // X-axis label color
            fontSize: '14px',
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        show: false, // Hide Y-axis labels
      },
      tooltip: {
        show: false,
        shared: true,
        intersect: false,
        style: {
          fontSize: '12px',
          background: '#fff',
          borderColor: '#4B5C76', // Tooltip border color
          borderWidth: 1,
        },
        marker: {
          show: false, // Hide tooltip markers
        },
      },
      fill: {
        type: 'gradient', // Use gradient fill for the area
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#4B5C76'], // Color for the gradient
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 100],
        },
      },
      grid: {
        show: true,
        borderColor: '#e0e0e0', // Grid line color
        strokeDashArray: 4, // Dashed grid lines
      },
      markers: {
      
        size: 0, // Set marker size to 0 to hide markers
      },
    };
  }
}
