import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Users } from '../model/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headeradmin',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './headeradmin.component.html',
  styleUrl: './headeradmin.component.scss'
})
export class HeaderadminComponent {
  constructor(private router: Router) {}
  user : Users[] = [];
  ngOnInit():void {
    if (localStorage.getItem('admin')) {
      this.user = JSON.parse(localStorage.getItem('admin')!);
      console.log(this.user);
    }
  }
  Logout() {
    localStorage.removeItem('admin');
    this.router.navigate(['/login']);
  }
}
