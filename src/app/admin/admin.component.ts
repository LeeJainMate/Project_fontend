import { Component,OnInit } from '@angular/core';

import { Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Users } from '../model/users';
import { request_loginservice } from '../service/request_login.service';
import { Getimgservice } from '../service/getImage_service';
import { getImg } from '../model/getImg';
import { HeaderadminComponent } from '../headeradmin/headeradmin.component';

@Component({
    selector: 'app-admid',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    imports: [CommonModule,RouterModule,FormsModule,HeaderadminComponent]
})
export class AdminComponent {
  constructor(private router: Router,private getUser : request_loginservice,private getimg : Getimgservice) {}
  Admin : Users[] = [];
  Users : Users[]= [];
  img : getImg[] = [];
  countdownImgSeconds: number = 10; // เวลานับถอยหลังของรูปภาพเริ่มต้นที่ 10 วินาที
  countdownImg: number = 4; // เวลานับถอยหลังของรูปภาพเริ่มต้นที่ 10 วินาที
  async ngOnInit():Promise<void> {
    if (localStorage.getItem('admin')) {
      this.Admin = JSON.parse(localStorage.getItem('admin')!);
      console.log( this.Admin);
      
      localStorage.setItem('admin', JSON.stringify(this.Admin));
      this.getimguser();
    }else{
      this.router.navigate(['']);
    }
  }
  async getimguser(){
    this.img =  await this.getimg.Getimg();
    this.Users = await this.getUser.GetUserall();
  }
    
  }
  
  
