import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [330, 600, 260, 700], label: 'Students' },
    { data: [120, 455, 100, 340], label: 'Developers' },
    { data: [45, 67, 800, 500], label: 'Working Employees' }
  ];
  chartLabels = ['January', 'February', 'March', 'April'];
  ngOnInit(): void {
    
  }

}
