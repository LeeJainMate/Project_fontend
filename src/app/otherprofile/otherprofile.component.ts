import { Component } from '@angular/core';
import { Users } from '../model/users';
import { ActivatedRoute } from '@angular/router';
import { Getimgservice } from '../service/getImage_service';
import { request_loginservice } from '../service/request_login.service';
import { Getranktoday } from '../model/Img';

@Component({
  selector: 'app-otherprofile',
  standalone: true,
  imports: [],
  templateUrl: './otherprofile.component.html',
  styleUrl: './otherprofile.component.scss'
})
export class OtherprofileComponent {
  // constructor(private route: ActivatedRoute,private getimgservice: Getimgservice,private getUser : request_loginservice) { }
  // uid : number = 0;
  // oldUser : Users[] = [];
  // User : Users[] = [];
  // Userlogin : Users[] = [];
  // admin : Users[] = [];
  // todayrank : Getranktoday[] =[];
  // yesterdayrank : Getranktoday[] =[];
  // rank : Getranktoday[] = [];
  // rankold : Getranktoday[] = [];
  // isLoggedIn: boolean = false;
  // async ngOnInit(): Promise<void> {
  //   this.route.queryParams.subscribe(params => {
  //      this.uid = params['uid'];
  // });
  // if(localStorage.getItem('user')){
  //   this.Userlogin = JSON.parse(localStorage.getItem('user')!);
  //   console.log("User");
    
  // }else if(localStorage.getItem('admin')){
  //   this.admin = JSON.parse(localStorage.getItem('admin')!);
  //   console.log("Admin");
  // }else{
    
  // }
  // this.User = await this.getimgservice.GetUser(this.uid);
  // if (this.User && this.User.length > 0) {
  //   this.todayrank = await this.getimgservice.GetRanktoday();
  //   this.yesterdayrank = await this.getimgservice.GetRankyesterday();
  //   this.getimgUser(this.User[0].uid,this.todayrank,this.yesterdayrank);
  // }
  // }
  // async getimgUser(Userid : any,todayrank: Getranktoday[], yesterdayrank: Getranktoday[]){
  //   for (let i = 0; i < todayrank.length; i++) {
  //     let ranknow: Getranktoday = { ...todayrank[i] };
  //     let foundYesterday = false; // เพิ่มตัวแปรเพื่อตรวจสอบว่ามีข้อมูลจาก yesterdayrank หรือไม่
  //     for(let j=0;j<yesterdayrank.length;j++){
  //         if(todayrank[i].name === yesterdayrank[j].name){
  //             ranknow.rankdifferent = yesterdayrank[j].rankingyesterday - todayrank[i].rankingtoday;
  //             ranknow.rankingyesterday = yesterdayrank[j].rankingyesterday
  //             this.rankold.push(ranknow);
  //             foundYesterday = true; // กำหนดค่าเป็น true เมื่อพบข้อมูลจาก yesterdayrank
  //             break; // หยุดการวนลูปหากพบข้อมูลจาก yesterdayrank
  //         }
  //     }
  //     if (!foundYesterday) {
  //       ranknow.rankingyesterday = 0;
  //       this.rankold.push(ranknow);
  //   }
  
  //     }
  //     this.rank = this.rankold.filter(rank => rank.uid === this.User[0].uid);
  //     console.log("rank",this.rank);
  //     this.imgUserold = await this.getimgservice.GetimgUser(Userid);
  //     console.log( this.imgUserold);
  //     this.getrankuser( this.rank,this.imgUserold);
  // }
  // getrankuser(rank : Getranktoday[] , imguser :  ImgUser[]){
  //   for (let i = 0; i < imguser.length; i++) {
  //     let ranknow: ImgUser = { ...imguser[i] };
  //     let foundYesterday = false; // เพิ่มตัวแปรเพื่อตรวจสอบว่ามีข้อมูลจาก yesterdayrank หรือไม่
  //     for(let j=0;j<rank.length;j++){
  //         if(imguser[i].name === rank[j].name){
  //             ranknow.rankdifferent = rank[j].rankdifferent;
  //             ranknow.rankingtoday = rank[j].rankingtoday;
  //             ranknow.rankingyesterday = rank[j].rankingyesterday;
  //             this.imgUser.push(ranknow);
  //             foundYesterday = true; // กำหนดค่าเป็น true เมื่อพบข้อมูลจาก yesterdayrank
  //             break; // หยุดการวนลูปหากพบข้อมูลจาก yesterdayrank
  //         }
  //     }
  //     if (!foundYesterday) {
  //       ranknow.rankingtoday = 0;
  //       ranknow.rankingyesterday = 0;
  //       this.imgUser.push(ranknow);
  //   }
  //     }
  // }
}
