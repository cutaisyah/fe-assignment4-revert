import { Team } from './../models/Team';
import { Login } from './../models/Login';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { UpdateApproved, UpdatePanitia, UpdateUser, UpdateUserPassword, User } from '../models/User';
import { Tournament, UpdateIsStarted, UpdateTournament } from '../models/Tournament';

import jwt_decode from "jwt-decode";
import { TokenService } from './token.service';
import { IsStarted } from '../models/IsStarted';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private userPayload: BehaviorSubject<any>;
  // public currentUserValue: Observable<any>;
  public authDecoded: any;
  token;

  constructor(private http: HttpClient, private router: Router, public tokenService: TokenService) {
    this.token = this.tokenService.getToken();
    this.authDecoded = jwt_decode(this.token);
    this.userPayload = new BehaviorSubject<any>(
      this.authDecoded
    );
  }

  get userPayloadValue(): any {
    return this.userPayload.value;
  }

  signUp(user: User) {
    return this.http
      .post<any>(`${environment.baseUrl}/auth/signup`, user)
      .subscribe(
        (success) => {
          Swal.fire('Terimakasih sudah mendaftar');
        },
        (err) => {
          console.log(err);
          Swal.fire(
            'Maaf ada yang salah dengan proses registrasi',
            err.message,
            'error'
          );
        }
      );
  }

  signIn(login: Login) {
    return this.http
      .post<any>(`${environment.baseUrl}/auth/signin`, login)
      .subscribe(
        (success) => {
          // console.log(success);
          localStorage.setItem('access_token', success.access_token);
          // localStorage.setItem('Payload_Token', JSON.stringify(success));
          this.userPayload.next(success);
          // console.log(success);
          if (success.roles === 'admin') {
            this.router.navigate(['/admin/layout/adminProfile/' + success.id]);
          } else if (success.roles === 'peserta') {
            this.router.navigate(['/peserta/pesertaLayout/getPeserta/' + success.id]);
          } else if (success.roles === 'lurah') {
            this.router.navigate(['/lurah/lurahLayout/getLurah/'+ success.id]);
          } else if (success.roles === 'panitia') {
            this.router.navigate(['/panitia/panitiaLayout/getPanitia/' + success.id]);
          }
          Swal.fire('Anda sudah login');
        },
        (err) => {
          Swal.fire('Maaf ada yang salah dengan proses login anda');
        }
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    // localStorage.removeItem('Payload_Token');
    // setTimeout(() => {
    // window.location.reload(); 
    // }, 1000);
    this.router.navigate(['/']);
  }

  // admin
  signUpAdmin(user: User) {
    return this.http
      .post<any>(`${environment.baseUrl}/admin/signup`, user)
      .subscribe(
        (success) => {
          console.log(success);
          Swal.fire('Terimakasih sudah mendaftar sebagai admin');
        },
        (err) => {
          console.log(err);
          Swal.fire(
            'Maaf ada yang salah dengan proses registrasi',
            err.error.message,
            'error'
          );
        }
      );
  }

  // updateAdminProfile(user: User) {
  //   return this.http
  //     .put<any>(`${environment.baseUrl}/admin/update/${user._id}`, user)
  //     .subscribe((res: any) => {
  //       Swal.fire('Berhasil memperbarui profil');
  //     });
  // }

  getAdminProfile(_id: string): Observable<any> {
    let endpoint = environment.baseUrl + '/admin/get/' + `${_id}`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log(res)
        return res || {};
      })
    );
    // return this.http.get<{ _id: string, username: string, email: string, password: string, birthdate: Date }>(
    //   environment.baseUrl + '/admin/get/' + `${_id}`
    // );
  }

  getAllDataLurah() {

  }

  //-----------------------------

  // Lurah
  createLurah(user: User) {
    return this.http
      .post<any>(`${environment.baseUrl}/admin/create-lurah`, user)
      .subscribe(
        (success) => {
          console.log(success);
          Swal.fire('Lurah berhasil dibuat!');
        },
        (err) => {
          console.log(err);
          Swal.fire(
            'Maaf ada yang salah dengan proses registrasi',
            err.message,
            'error'
          );
        }
      );
  }

  //-----------------------------

  // panitia
  createPanitia(user: User) {
    return this.http
      .post<any>(`${environment.baseUrl}/lurah/create-panitia`, user)
      .subscribe(
        (success) => {
          console.log(success);
          Swal.fire('Panitia berhasil dibuat!');
        },
        (err) => {
          console.log(err);
          Swal.fire(
            'Maaf ada yang salah dengan proses registrasi',
            err.message,
            'error'
          );
        }
      );
  }

  getPanitiaProfile(_id: string): Observable<any>{
    let endpoint = environment.baseUrl + '/panitia/get/' + `${_id}`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log("respon getPanitiaProfile:", res)
        return res || {};
      })
    );
  }

  updatePanitiaProfile(_id: string, email: string, username: string, password: string, birthdate: string, phone: string){
    let endpoint = `${environment.baseUrl}/panitia/update/${_id}`;
    let panitiaData: UpdatePanitia;
    panitiaData = {
      _id: _id,
      email: email,
      username: username,
      password: password,
      birthdate: birthdate,
      phone: phone
    };
    this.http.put<any>(endpoint, panitiaData)
    .subscribe(response => {
      this.router.navigate([`/panitia/panitiaLayout/getPanitia/${_id}`]).then(()=>  {window.location.reload();});
    });
  }

  //----------------------------

  updatePesertaProfile(user: UpdateUser) {
    let endpoint = `${environment.baseUrl}/peserta/update`;
    return this.http.put<any>(endpoint, user).pipe(map(result => true))
  }

  updatePesertaPassword(password: UpdateUserPassword) {
    let endpoint = `${environment.baseUrl}/peserta/update-password`;
    return this.http.put<any>(endpoint, password).pipe(map(result => true))
  }


  getPesertaProfile(_id: string): Observable<any> {
    let endpoint = environment.baseUrl + '/peserta' + '/get/' + `${_id}`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log(res)
        return res || {};
      })
    );
  }

  //-------------------------------

  createTournament(tournament_name: string, permalink: string, categories: string, max_total_participant: string, age_minimum: string, description: string, image: File,  first_prize: string, second_prize: string, third_prize: string, game: string) {
    let endpoint = environment.baseUrl + '/panitia' + '/create-tournament/';
    const tournamentData = new FormData();
    tournamentData.append("tournament_name", tournament_name);
    tournamentData.append("permalink", permalink);
    tournamentData.append("categories", categories);
    tournamentData.append("max_total_participant", max_total_participant);
    tournamentData.append("age_minimum", age_minimum);
    tournamentData.append("description", description);
    tournamentData.append("image", image);
    tournamentData.append("first_prize", first_prize);
    tournamentData.append("second_prize", second_prize);
    tournamentData.append("third_prize", third_prize);
    tournamentData.append("game", game);

    this.http
      .post<{ message: string; tournament: Tournament }>(
        endpoint,
        tournamentData
      )
      .subscribe(responseData => {
        console.log(responseData)
        // this.router.navigate(["/"]);
      });
  }

  getAllDataTournamentBasedOnDistrict(): Observable<any> {
    let endpoint = environment.baseUrl + '/panitia/allbaseondistrict';
    return this.http.get(endpoint, { headers: this.headers });
  }

  changeTournamentStatusOngoing(_id: string){
    let tournamentData: UpdateIsStarted;
    let endpoint = environment.baseUrl + '/panitia/edit-status-tournament-to-ongoing/' + `${_id}`
    tournamentData = {
      _id: _id,
      is_started: "ongoing",
    };
    
    this.http
      .put(endpoint, tournamentData)
      .subscribe(response => {
        this.router.navigate(["/panitia/panitiaLayout/dataTournament"]);
      });
  }

  changeTournamentStatusCompleted(_id: string){
    let tournamentData: UpdateIsStarted;
    let endpoint = environment.baseUrl + '/panitia/edit-status-tournament-to-completed/' + `${_id}`
    tournamentData = {
      _id: _id,
      is_started: "completed",
    };
    
    this.http
      .put(endpoint, tournamentData)
      .subscribe(response => {
        this.router.navigate(["/panitia/panitiaLayout/dataTournament"]);
      });
  }

  updateTournament(_id: string, categories: string, max_total_participant: number, age_minimum: number, description: string, first_prize: string, second_prize: string, third_prize: string){
    let endpoint = `${environment.baseUrl}/panitia/edit-tournament/${_id}`;
    let tournamentData: UpdateTournament;
    tournamentData = {
      _id: _id,
      categories: categories,
      max_total_participant: max_total_participant,
      age_minimum: age_minimum,
      description: description,
      first_prize: first_prize,
      second_prize: second_prize,
      third_prize: third_prize,
    };
    this.http.put<any>(endpoint, tournamentData)
    .subscribe(response => {
      this.router.navigate(["/panitia/panitiaLayout/dataTournament"]);
    });
    
  }

  getTournamentById(_id: string): Observable<any>{
    let endpoint = environment.baseUrl + '/panitia/findtournamentbyid/' + `${_id}`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(
      map((res: Response) => {
        // console.log("respon gettournamentbyid:", res)
        return res || {};
      })
    );
  }

  getDataPesertaRegistered(): Observable<any> {
    let endpoint = environment.baseUrl + '/panitia/data-peserta';
    return this.http.get(endpoint, { headers: this.headers });
  }

  changeStatusApproved(_id: string){
    let usertData: UpdateApproved;
    let endpoint = environment.baseUrl + '/panitia/edit-status-to-approved/' + `${_id}`
    usertData = {
      _id: _id
    };
    
    this.http
      .put(endpoint, usertData)
      .subscribe(response => {
        this.router.navigate(["/panitia/panitiaLayout/dataPeserta"]);
      });
  }

  //==========================================

  // createTeam(team: Team) {
  //   return this.http
  //     .post(`${environment.baseUrl}/peserta/create-team`, team, {
  //       headers: this.headers,
  //     })
  //     .subscribe((res: any) => {
  //       alert('Berhasil membuat tim!');
  //       localStorage.setItem('teamId', res._id);
  //       // this.getTeam().subscribe((res:any)=>{
  //       //   console.log(res);
  //       // })
  //     });
  // }

  // getUserProfile(_id): Observable<any> {
  //   let endpoint = environment.baseUrl + '/peserta' + '/get/' + `${_id}`;
  //   return this.http.get(endpoint, { headers: this.headers }).pipe(
  //     map((res: Response) => {
  //       return res || {};
  //     })
  //   );
  // }

  getAllProfile(): Observable<any> {
    let endpoint = environment.baseUrl + '/admin' + '/data-user';
    return this.http.get(endpoint, { headers: this.headers });
  }
}
