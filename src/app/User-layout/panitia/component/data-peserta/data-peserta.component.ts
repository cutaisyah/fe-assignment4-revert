import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

import jwt_decode from "jwt-decode";
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-data-peserta',
  templateUrl: './data-peserta.component.html',
  styleUrls: ['./data-peserta.component.scss']
})
export class DataPesertaComponent implements OnInit {

  page = 1;
  totalpage: any;
  pageSize = 10;
  userData: any;
  public authDecoded: any;
  token;

  constructor(public userService: UserService, public tokenService: TokenService) { }

  ngOnInit() {
    this.showAllDataPeserta();
    this.token = this.tokenService.getToken();
    this.authDecoded = jwt_decode(this.token);
  }

  showAllDataPeserta(){
    // this.allTournament = this.userService.getAllDataTournament()
    this.userService.getDataPesertaRegistered().subscribe(
      (userdata) => {
        this.userData = userdata.data;
        console.log(this.userData)
      },
      (error) => {
        console.log(error);
      }
    );
  }



}
