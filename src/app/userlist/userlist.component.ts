import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Users } from '../model/users';
import { request_loginservice } from '../service/request_login.service';
import { Getimgservice } from '../service/getImage_service';
import { HeaderadminComponent } from '../headeradmin/headeradmin.component';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, RouterModule,HeaderadminComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
  users: Users[] = []; 
   user: Users[] = []; 
   Admin : Users[] = [];
   oldadmin : Users[] = [];
  constructor(private getimgservice: Getimgservice,private getUser : request_loginservice,private router: Router) {}

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('admin')) {
        this.Admin = JSON.parse(localStorage.getItem('admin')!);
        this.loadUsers(); 
      }else{
        this.router.navigate(['']);
      }
  }

  async loadUsers(): Promise<void> {
    this.users = await this.getUser.GetUserall();
  }
}
