import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Users } from '../model/users';
import { imagevote } from '../model/vote';
import { Router } from '@angular/router';
import { Getimgservice } from '../service/getImage_service';
import { Chart,registerables  } from 'chart.js';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;

  getimg: imagevote[] = [];
  isLoading: boolean = true;
  User : Users[] = [];
  charts: Chart[] = [];
  constructor(private getimgservice: Getimgservice ,private router: Router,) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      this.User = JSON.parse(localStorage.getItem('user')!);
      if (this.User) {
        this.getimg = await this.getimgservice.GetGraph(this.User[0].uid);
        console.log('getimg:', this.getimg);
        this.ngAfterViewInit();
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      this.isLoading = false; // Set loading state to false when data loading is complete
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.getimg && this.getimg.length > 0) {
        this.createCharts();
      }
    }, 0);
  }

  createCharts(): void {
    for (const img of this.getimg) {
      const id = `myChart${img.sid}`;
      const existingCanvas = document.getElementById(id) as HTMLCanvasElement;
     
      
      if (!existingCanvas) {
        console.error(`Canvas element with id '${id}' not found.`);
        continue; // Skip to the next iteration if canvas element is not found
      }
      const currentDate = new Date();
      const sevenDaysAgo = new Date(currentDate);
      sevenDaysAgo.setDate(currentDate.getDate() - 6);

      const voteDateArray = img.voteDate.split(',');
      const totalScoreArray = img.score.split(',').map(Number);
  
      // const labels = this.generateDateLabels(sevenDaysAgo);
      const data = totalScoreArray;
      const labels = voteDateArray;
      // const data = this.generateDataArray(voteDateArray, totalScoreArray, sevenDaysAgo);
  
      new Chart(existingCanvas, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'คะแนนในแต่ละวัน',
              data: data,
              borderWidth: 2,
              pointRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            title: {
              display: true,
            },
          },
        },
      });
    }
  }

  
}
