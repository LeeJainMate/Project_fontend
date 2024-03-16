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

      public async SignupUser(name: string, email: string, password: string, types: string) {
        const url = this.constants.API_ENDPOINT + '/login/register';
        const body = {
          email: email,
          name: name,
          password: password,
          types: types
        };
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
          const response = await this.http.post(url, body, { headers: headers }).toPromise();
          console.log(response);
        } catch (error) {
          throw error;
        }
      }
}