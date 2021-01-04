import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';
import jwt_decode from "jwt-decode";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-data-peserta',
  templateUrl: './data-peserta.component.html',
  styleUrls: ['./data-peserta.component.scss']
})
export class DataPesertaComponent implements OnInit {

  userData: any;
  public authDecoded: any;
  token;

  constructor(private router:Router, public userService: UserService, public tokenService: TokenService) { }

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
    approve(id){
      Swal.fire({
        title: 'Anda Yakin Ingin Menyetujui Peserta Ini ?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'setujui'
      }).then((result) => {
        if (result.isConfirmed) {
          this.changeStatusApproved(id)
        }
      })
    }

    changeStatusApproved(id){
      this.userService.changeStatusApproved(
        id
      );
      this.ngOnInit()
    }
}
