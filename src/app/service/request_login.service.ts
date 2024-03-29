import { Injectable } from '@angular/core';
import { Constants } from '../config/constans';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Users } from '../model/users';
@Injectable({
  providedIn: 'root'
})
export class request_loginservice {


      constructor(private constants : Constants , private http : HttpClient){}
      public async LoginUser(email: string, password: string) {
        const url = this.constants.API_ENDPOINT + "/login/" + email + "/" + password;
        const response = await lastValueFrom(this.http.get(url));
        return response as Users[];
      }
      public async GetloginUser(uid: number) {
        const url = this.constants.API_ENDPOINT + "/login/" + uid;
        const response = await lastValueFrom(this.http.get(url));
        return response as Users[];
      }
      public async GetUserall() {
        const url = this.constants.API_ENDPOINT + "/login";
        const response = await lastValueFrom(this.http.get(url));
        return response as Users[];
      }

      public async SignupUser(name: string, email: string, password: string, avatar: string, types: string) {
        const url = this.constants.API_ENDPOINT + '/login/register';
        const body = {
          email: email,
          name: name,
          password: password,
          avatar: avatar,
          types: types,
        };
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
          const response = await this.http.post(url, body, { headers: headers }).toPromise();
          console.log(response);
        } catch (error) {
          throw error;
        }
      }
    //   public async SignupUser(name: string, email: string, password: string, type: string, file: File) {
    //     const url = this.constants.API_ENDPOINT + '/login/register';
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('username', email);
    //     formData.append('name', name);
    //     formData.append('password', password);
    //     formData.append('type', type);
    
    //     try {
    //         const response = await this.http.post(url, formData).toPromise();
    //         console.log(response);
    //         return response as SignupData[];
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}
