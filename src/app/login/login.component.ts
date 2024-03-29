import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { Users } from '../model/users';
import { request_loginservice } from '../service/request_login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
// 
export class LoginComponent  {

  constructor(private relog : request_loginservice, private router: Router) {}
  userlogin : Users[] = [];
  async loginuser(email: string, password: string) {
    if (email.trim() === '' || password.trim() === '') {
      alert("email or password is not provided.");
      return;
    }else{
       this.userlogin = await this.relog.LoginUser(email, password);
    if(this.userlogin.length > 0 && this.userlogin[0].types === 'users'){
        localStorage.setItem('user', JSON.stringify(this.userlogin));
        this.router.navigate(['/home']);
    }else if(this.userlogin.length > 0 && this.userlogin[0].types === 'admin') {
        localStorage.setItem('admin', JSON.stringify(this.userlogin));
        this.router.navigate(['/admin']);
    }else{
      alert("Loging failed.");
      }
    }
  }
}
