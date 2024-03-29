import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { request_loginservice } from '../service/request_login.service';
import { Router } from '@angular/router';
import { Users } from '../model/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private relog: request_loginservice, private router: Router) { }
  isLoading: boolean = true;
  image: File | undefined;
  imageUrl: string | undefined;
  userlogin: Users[] = [];
  async register(name: string, email: string, password: string, avatar: string) {
    if (name.trim() === '' && email.trim() === '' && password.trim() === '' && avatar.trim() === '') {
      alert("กรุณากรอกให้ถูกต้อง");
      return;
    }
    const types = 'users';
    await this.relog.SignupUser(name, email, password, avatar, types);
    this.router.navigate(['/login']);
  }



  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.image = file;
    this.imageUrl = URL.createObjectURL(file);
  }
}
