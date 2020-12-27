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
import { UpdateUser, UpdateUserPassword, User } from '../models/User';
import { Tournament } from '../models/Tournament';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private userPayload: BehaviorSubject<any>;
  public currentUserValue: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('Payload_Token'))
    );
    // console.log(this.userPayload);
    this.currentUserValue = this.userPayload.asObservable();
  }

  get userPayloadValue(): any {
    // let endpoint = environment.baseUrl + '/auth/userid';
    // return this.http.get(endpoint).pipe(
    //   map((res: Response) => {
    //     console.log(res);
    //     return res || {};
    //   })
    // );
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
          console.log(success);
          if (success.roles === 'admin') {
            this.router.navigate(['/admin/layout/adminProfile/' + success.id]);
          } else if (success.roles === 'peserta') {
            this.router.navigate(['/peserta/pesertaLayout/getPeserta/' + success.id]);
          } else if (success.roles === 'lurah') {
            this.router.navigate(['/lurah/lurahLayout/getLurah/'+ success.id]);
          } else if (success.roles === 'panitia') {
            this.router.navigate(['/panitia/panitiaLayout/getPanitia' + success.id]);
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
