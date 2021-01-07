import { Team } from './../models/Team';
import { Login } from './../models/Login';
import { Match, MatchEliminate, MatchId } from './../models/Match';
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
import { createDistrict, RegisterOtherMember, RegisterTournament, UpdateApproved, UpdateUser, UpdateUserPassword, User } from '../models/User';
import { setWinnerTournament, Tournament, UpdateIsStarted, UpdateTournament } from '../models/Tournament';

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
    try {
      this.authDecoded = jwt_decode(this.token);
    } catch (error) {
      // console.log('👾 invalid token format', error);
    }
    
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
      .post<any>(`${environment.baseUrl}/auth/test`, login)
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
          console.log(err)
          Swal.fire('Maaf ada yang salah dengan proses login anda');
        }
      );
  }

  logout() {
    localStorage.removeItem('access_token');
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
            err.message,
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

  //============================================

  // admin

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

  createDistrict(districts: string){
    let district: createDistrict;
    district = {
      districts: districts,
    }
    return this.http.post<any>(`${environment.baseUrl}/admin/create-district`, district)
      .subscribe(
        (success) => {
          console.log(success);
          Swal.fire('District berhasil dibuat!');
        },
        (err) => {
          console.log(err);
          Swal.fire(
            'Maaf ada yang salah dengan proses create',
            err.message,
            'error'
          );
        }
      );
  }

  getAdminProfile(_id: string): Observable<any> {
    let endpoint = environment.baseUrl + '/admin/get/' + `${_id}`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log(res)
        return res || {};
      })
    );
  }

  getAllDataLurah() {

  }

  updateAdminProfile(user: UpdateUser) {
    let endpoint = `${environment.baseUrl}/admin/update`;
    return this.http.put<any>(endpoint, user).pipe(map(result => true))
  }

  updateAdminPassword(password: UpdateUserPassword) {
    let endpoint = `${environment.baseUrl}/admin/update-password`;
    return this.http.put<any>(endpoint, password).pipe(map(result => true))
  }

  //============================================

  // Lurah
  
  getAllDataLurahProfile(_id: string){
    return this.http.get(`${environment.baseUrl}/lurah/get/${_id}`, { headers: this.headers })
  }

  dataTournamentByDistrict(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/lurah/allbaseondistrict`, { headers: this.headers })
  }
  
  getAllDataPanitia(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/lurah/data-panitia`, { headers: this.headers })
  }

  updateLurahProfile(user: UpdateUser) {
    let endpoint = `${environment.baseUrl}/lurah/update`;
    return this.http.put<any>(endpoint, user).pipe(map(result => true))
  }

  updateLurahPassword(password: UpdateUserPassword) {
    let endpoint = `${environment.baseUrl}/lurah/update-password`;
    return this.http.put<any>(endpoint, password).pipe(map(result => true))
  }

  //======================================================================

  //============================================ panitia - profile
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
  

  updatePanitiaProfile(user: UpdateUser) {
    let endpoint = `${environment.baseUrl}/panitia/update`;
    return this.http.put<any>(endpoint, user).pipe(map(result => true))
  }

  updatePanitiaPassword(password: UpdateUserPassword) {
    let endpoint = `${environment.baseUrl}/panitia/update-password`;
    return this.http.put<any>(endpoint, password).pipe(map(result => true))
  }

  //------------------------------- panitia - tournament

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
      .subscribe((success) => {
        // console.log(success);
        Swal.fire('Good','Tournament berhasil dibuat!','success');
      },
      (err) => {
        console.log(err);
        Swal.fire(
          'Maaf ada yang salah dengan proses registrasi',
          err.message,
          'error'
        );
      });
  }

  getAllDataTournamentBasedOnDistrict(): Observable<any> {
    let endpoint = environment.baseUrl + '/panitia/allbaseondistrict';
    return this.http.get(endpoint, { headers: this.headers });
  }

  getAllDataTournamentBasedOnDistrictOngoing(): Observable<any> {
    let endpoint = environment.baseUrl + '/panitia/allbaseondistrictongoing';
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

  setWinner(_id: string, first_winner: string, second_winner: string, third_winner: string){
    let endpoint = `${environment.baseUrl}/panitia/edit-tournament/${_id}`;
    let winnerData: setWinnerTournament;
    winnerData = {
      _id: _id,
      first_winner: first_winner,
      second_winner: second_winner,
      third_winner: third_winner
    };
    this.http.put<any>(endpoint, winnerData)
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
    let userData: UpdateApproved;
    let endpoint = environment.baseUrl + '/panitia/edit-status-to-approved/' + `${_id}`
    userData = {
      _id: _id
    };
    
    this.http
      .put(endpoint, userData)
      .subscribe(response => {
        Swal.fire('Status berhasil diubah!');
        this.router.navigate(["/panitia/panitiaLayout/dataPeserta"]);
      },
      err => {
        console.log(err);
        Swal.fire(
          'Maaf, Proses tidak tervalidasi',
          err.message,
          'error'
        );
      });
  }

  getTheMatch(_id:string): Observable<any>{
    let endpoint = environment.baseUrl + '/panitia/match/' + `${_id}`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(
      map((res: Response) => {
        // console.log("respon match gettournamentbyid:", res)
        return res || {};
      })
    );
  }

  getTheTeamMatch(_id:string, match_round: string): Observable<any>{
    let endpoint = `${environment.baseUrl}/panitia/teamMatch/${_id}/${match_round}`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(
      map((res: Response) => {
        // console.log("respon match gettournamentbyid:", res)
        return res || {};
      })
    );
  }

  inputScoreMatch(team: string, score: string, match_round: string){
    let endpoint = `${environment.baseUrl}/panitia/inputScoreMatch`;
    let matchData: Match;
    matchData = {
      team: team,
      score: score,
      match_round: match_round
    };
    this.http.put<any>(endpoint, matchData)
    .subscribe(response => {
      window.location.reload();
    });
  }

  changeStatusEliminate(team: string){
    let endpoint = `${environment.baseUrl}/panitia/changeStatusEliminateTeam`;
    let matchData: MatchEliminate;
    matchData = {
      team: team
    };
    this.http.put<any>(endpoint, matchData)
    .subscribe(response => {
      window.location.reload();
    });
  }

  checkEliminate(_id: string, match_round: string){
    let endpoint = `${environment.baseUrl}/panitia/checkEliminate/${_id}`;
    let matchData: MatchId;
    matchData = {
      _id: _id,
      match_round: match_round
    };

    this.http.put<any>(endpoint, matchData)
    .subscribe(response => {
      // this.router.navigate([`/panitia/panitiaLayout/manageGame`]);
        this.router.navigate([`/panitia/panitiaLayout/manageGame/${_id}/${match_round+1}`]).then(()=>  {window.location.reload()} );
      });
  }

  thirdWinnerMatch(_id: string, match_round: string){
    let endpoint = `${environment.baseUrl}/panitia/thirdwinner/${_id}`;
    let matchData: MatchId;
    matchData = {
      _id: _id,
      match_round: match_round
    };

    this.http.put<any>(endpoint, matchData)
    .subscribe(response => {
      // this.router.navigate([`/panitia/panitiaLayout/manageGame`]);
        this.router.navigate([`/panitia/panitiaLayout/manageGame/${_id}/${match_round}`]).then(()=>  {window.location.reload()} );
      });
  }

  //===================================================================================

  //---------------------------- peserta

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
        // console.log(res)
        return res || {};
      })
    );
  }

  pesertaRegisterTournament(_id:string ,game: string) {
    let userData: RegisterTournament;
    let endpoint = environment.baseUrl + '/peserta/register-tournament/' + `${game}`;
    userData = {
      game: game
    };
    
    return this.http.put(endpoint, userData)
      .subscribe(
        response => {
          Swal.fire('Terimakasih sudah Mendaftar Tournament');
          this.router.navigate([`tournament/detail/${game}/${_id}`]).then(()=> {window.location.reload();});
        },
        err => {
          console.log(err);
          Swal.fire(
            'Maaf, Proses Pendaftaran Tournament tidak tervalidasi',
            err.message,
            'error'
          );
        }
      );
  }

  pesertaRegisterOtherPesertaToTeam(username: string){
    let userData: RegisterOtherMember;
    let endpoint = environment.baseUrl + '/peserta/add-member'
    userData = {
      username: username
    };
    this.http
      .put(endpoint, userData)
      .subscribe(response => {
        Swal.fire('Terimakasih sudah Mendaftar Tournament');
          this.router.navigate(["/peserta/pesertaLayout/registerTeam"]).then(()=> {window.location.reload();});
        },
        err => {
          // console.log(err);
          Swal.fire(
            'Maaf, Peserta tersebut tidak tervalidasi',
            err.message,
            'error'
          );
      });
  }

  createTeam(team_name: string, team_phone: string) {
    let teamData: Team;
    let endpoint = `${environment.baseUrl}/peserta/create-team`
    teamData = {
      team_name: team_name,
      team_phone: team_phone
    };
    return this.http.post(endpoint, teamData)
      .subscribe((response) => {
          Swal.fire('Team Berhasil Didaftarkan, Silahkan Login Lagi');
        },
        err => {
          // console.log(err);
          Swal.fire(
            'Pendaftaran Team tidak tervalidasi',
            err.message,
            'error'
          );
        }
      );
  }

  getPesertaTeam(){
    let endpoint = `${environment.baseUrl}/peserta/getTeamPeserta`;
    return this.http.get(endpoint, { headers: this.headers });
  }

  // getUserProfile(_id): Observable<any> {
  //   let endpoint = environment.baseUrl + '/peserta' + '/get/' + `${_id}`;
  //   return this.http.get(endpoint, { headers: this.headers }).pipe(
  //     map((res: Response) => {
  //       return res || {};
  //     })
  //   );
  // }

  getAllProfile(): Observable<any> {
    let endpoint = `${environment.baseUrl}/admin/data-user`;
    return this.http.get(endpoint, { headers: this.headers });
  }

  //========================================================

  //------------------- Tournament-------------------------

  getAllTournament(): Observable<any>{
    let endpoint = environment.baseUrl + '/tournament/all';
    return this.http.get(endpoint, { headers: this.headers });
  }

  getAllTournamentBasedOnGame(game: string): Observable<any>{
    let endpoint = environment.baseUrl + '/tournament/filter-game/' + `${game}`;
    return this.http.get(endpoint, { headers: this.headers });
  }

  getAllTournamentBasedOnDistrict(district: string): Observable<any>{
    let endpoint = environment.baseUrl + '/tournament/filter-district/' + `${district}`;
    return this.http.get(endpoint, { headers: this.headers });
  }

  getAllTournamentBasedOnAvailable(): Observable<any>{
    let endpoint = environment.baseUrl + '/tournament/pending';
    return this.http.get(endpoint, { headers: this.headers });
  }

  getDetailTournament(permalink: string): Observable<any>{
    let endpoint = environment.baseUrl + '/tournament/detail/'+`${permalink}`;
    return this.http.get(endpoint, { headers: this.headers });
  }

  getTheMatchScore(_id:string): Observable<any>{
    let endpoint = environment.baseUrl + '/tournament/match/' + `${_id}`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }

  //===========================================================

  //--------------------------- other -----------------------------

  getallDistrict(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/tournament/getalldistrict`, { headers: this.headers });
  }

  getallGame(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/tournament/getallgame`, { headers: this.headers });
  }

}
