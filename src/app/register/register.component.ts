import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { request_loginservice } from '../service/request_login.service';
import { Router } from '@angular/router';
import { Users } from '../model/users';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, MatInputModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private relog: request_loginservice, private router: Router) { }
  userlogin: Users[] = [];
  async register(name: string, email: string, password: string) {
    if (name.trim() === '' &&  email.trim() === '' &&  password.trim() === '') {
      alert("กรุณากรอกให้ถูกต้อง");
      return;
    }
    const types = 'user';
    await this.relog.SignupUser(name, email, password, types);
    this.router.navigate(['/login']);
  }
}
