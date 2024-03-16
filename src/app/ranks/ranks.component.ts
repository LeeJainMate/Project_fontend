import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Getimgservice } from '../service/getImage_service';
import { NgFor } from '@angular/common';
import { Getranktoday } from '../model/Img';
import { CommonModule } from '@angular/common';
import { Users } from '../model/users';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ranks',
  standalone: true,
  imports: [HeaderComponent,CommonModule,NgFor,RouterModule],
  templateUrl: './ranks.component.html',
  styleUrl: './ranks.component.scss'
})
export class RanksComponent implements OnInit {
  playerRankings: any[] = []; // ประกาศตัวแปรสำหรับเก็บข้อมูลผู้เล่นและอันดับ
  todayrank : Getranktoday[] =[];
  yesterdayrank : Getranktoday[] =[];
  rank : Getranktoday[] = [];
  selectedPlayer: any;
  Users : Users[] = [];
  constructor(private getimgservice: Getimgservice) {}

  ngOnInit(): void {
      this.loadPlayerRankings(); // เรียกเมธอดเมื่อคอมโพเนนต์ถูกโหลด
      this.Users = JSON.parse(localStorage.getItem('user')!);
  }

  async loadPlayerRankings() {
      this.todayrank = await this.getimgservice.GetRanktoday();
      this.yesterdayrank = await this.getimgservice.GetRankyesterday();
      console.log('Today',this.todayrank);
      console.log("Yesterday",this.yesterdayrank);
      this.updaterank(this.todayrank,this.yesterdayrank);
      
  }
  updaterank(todayrank: Getranktoday[], yesterdayrank: Getranktoday[]): void {
      for (let i = 0; i < todayrank.length; i++) {
          let ranknow: Getranktoday = { ...todayrank[i] };
          for(let j=0;j<yesterdayrank.length;j++){
              if(todayrank[i].name == yesterdayrank[j].name){
                  ranknow.rankdifferent = yesterdayrank[j].rankingyesterday - todayrank[i].rankingtoday;
                  ranknow.rankingyesterday = yesterdayrank[j].rankingyesterday
                  this.rank.push(ranknow);
                  
              }
          }
          }
          console.log(this.rank);
          
      }
}