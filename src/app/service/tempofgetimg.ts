// import { Injectable } from '@angular/core';
// import { Constants } from '../config/constans';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { lastValueFrom } from 'rxjs';
// import { Getranktoday} from '../model/Img';
// import { getImg } from '../model/getImg';
// import { imagevote } from '../model/vote';

// @Injectable({
//     providedIn: 'root'
// })
// export class Getimgservice {


//     constructor(private constants: Constants, private http: HttpClient) { }
//     public async Getimg() {
//         const url = this.constants.API_ENDPOINT + "/image";
//         const response = await lastValueFrom(this.http.get(url));
//         return response as getImg[];
//     }

//     public async InsertVote(userid: number, imgid: number, score: number, isWinner: boolean) {
//         const url = this.constants.API_ENDPOINT + '/vote/insertimg';
//         const body = {
//             userid: userid,
//             imgid: imgid,
//             score: score,
//             isWinner: isWinner,
//         };
//         const headers = new HttpHeaders().set('Content-Type', 'application/json');
//         try {
//             const response = await this.http.post(url, body, { headers: headers }).toPromise();
//             return true;
//         } catch (error) {
//             throw error;
//         }
//     }
//     public async Updateimg(imgid: number, score: number) {
//         const url = this.constants.API_ENDPOINT + '/img/update/' + imgid;
//         const body = {
//             score: score,
//         };
//         const headers = new HttpHeaders().set('Content-Type', 'application/json');
//         try {
//             const response = await this.http.put(url, body, { headers: headers }).toPromise();
//             return true;
//         } catch (error) {
//             throw error;
//         }
//     }
//     public async GetRanktoday() {
//         const url = this.constants.API_ENDPOINT + "/ranks/today";
//         const response = await lastValueFrom(this.http.get(url));
//         return response as Getranktoday[];
//     }
//     public async GetRankyesterday() {
//         const url = this.constants.API_ENDPOINT + "/ranks/yesterday";
//         const response = await lastValueFrom(this.http.get(url));
//         return response as Getranktoday[];
//     }
//     public async GetGraph(uid: number) {
//         const url = this.constants.API_ENDPOINT + "/ranks/graph/" + uid;
//         const response = await lastValueFrom(this.http.get(url));
//         return response as imagevote[];
//     }
// }