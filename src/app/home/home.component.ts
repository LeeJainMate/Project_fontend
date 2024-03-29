import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Getranktoday } from '../model/Img';
import { Getimgservice } from '../service/getImage_service';
import { request_loginservice } from '../service/request_login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from '../model/users';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,HeaderComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imageuploadUrl: string = "";
  oldUser : Users[] = [];
  User : Users[] = [];
  // imgUser : ImgUser[] =[];
  // imgUserold : ImgUser[] =[];
  image: File | undefined;
  imageUrl : string | undefined;
  imageuser: File | undefined;
  imageUrluser : string | undefined;
  isLoading: boolean = true; 
  editName: string = '';
  imgcheak : boolean = true;
  cheackname : boolean = true;
  cheackpass : boolean = true;
  cheacknewpass : boolean = true;
  success : boolean = false;
  successimg : boolean = false;
  cheakchange = true;
  todayrank : Getranktoday[] =[];
  yesterdayrank : Getranktoday[] =[];
  rank : Getranktoday[] = [];
  rankold : Getranktoday[] = [];
  constructor(private getimgservice: Getimgservice,private snackBar: MatSnackBar, private router: Router,private getUser : request_loginservice) {}
  async getimgUser(Userid : any,todayrank: Getranktoday[], yesterdayrank: Getranktoday[]){
    for (let i = 0; i < todayrank.length; i++) {
      let ranknow: Getranktoday = { ...todayrank[i] };
      let foundYesterday = false; // เพิ่มตัวแปรเพื่อตรวจสอบว่ามีข้อมูลจาก yesterdayrank หรือไม่
      for(let j=0;j<yesterdayrank.length;j++){
          if(todayrank[i].name === yesterdayrank[j].name){
              ranknow.rankdifferent = yesterdayrank[j].rankingyesterday - todayrank[i].rankingtoday;
              ranknow.rankingyesterday = yesterdayrank[j].rankingyesterday
              this.rankold.push(ranknow);
              foundYesterday = true; // กำหนดค่าเป็น true เมื่อพบข้อมูลจาก yesterdayrank
              break; // หยุดการวนลูปหากพบข้อมูลจาก yesterdayrank
          }
      }
      if (!foundYesterday) {
        ranknow.rankingyesterday = 0;
        this.rankold.push(ranknow);
    }
  
      }
      this.rank = this.rankold.filter(rank => rank.uid_fk === this.User[0].uid);
      console.log("rank",this.rank);
      // this.imgUserold = await this.getimgservice.GetimgUser(Userid);
      // console.log( this.imgUserold);
      // this.getrankuser( this.rank,this.imgUserold);
  }
}
