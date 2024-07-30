import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
  import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chartjs',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chartjs.component.html',
  styleUrl: './chartjs.component.css'
})
export class ChartjsComponent {
  data: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
    
      data: this.getData()
  }]
  }

  getData(){
    return [10, 20, 30, 40, 50, 60]
  }

}

