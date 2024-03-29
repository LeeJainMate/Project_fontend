import { Component } from '@angular/core';
import { Users } from '../model/users';
import { Getimgservice } from '../service/getImage_service';
import { request_loginservice } from '../service/request_login.service';
import { Router } from '@angular/router';
import { getImg } from '../model/getImg';
import { CommonModule } from '@angular/common';
import { HeaderadminComponent } from '../headeradmin/headeradmin.component';

@Component({
  selector: 'app-photoall',
  standalone: true,
  imports: [CommonModule,HeaderadminComponent],
  templateUrl: './photoall.component.html',
  styleUrl: './photoall.component.scss'
})
export class PhotoallComponent {
  imgs: getImg[] = []; // เปลี่ยน users เป็น imgs
    Admin: Users[] = []; // เปลี่ยน User เป็น Img
    oldadmin: Users[] = []; // เปลี่ยน User เป็น Img

    constructor(private getimgservice: Getimgservice, private catmashService: request_loginservice, private router: Router) {}

    async ngOnInit(): Promise<void> {
        if (localStorage.getItem('admin')) {
            this.Admin = JSON.parse(localStorage.getItem('admin')!);
            this.loadImages();
        } else {
            this.router.navigate(['']);
        }
    }

    async loadImages(): Promise<void> {
        this.imgs = await this.getimgservice.Getimg();
    }
}
