import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Users } from '../model/users';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  user : Users[] = [];
  ngOnInit():void {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user')!);
      console.log(this.user);
    }
  }
  Logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
