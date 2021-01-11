import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';
import jwt_decode from "jwt-decode";

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
    this.token = localStorage.getItem('access_token');
    if (this.token){
      this.authDecoded = jwt_decode(this.token);
    }
  }

  showAllDataPeserta(){
    this.userService.getDataPesertaRegistered().subscribe(
      (userdata) => {
        this.userData = userdata.data;
        // console.log(this.userData)
      },
      (error) => {
        console.log(error);
      }
    );
  }
    approve(id){
      Swal.fire({
        title: 'Anda Yakin Ingin Menyetujui Peserta Ini ?',
        text:"Anda tidak bisa lagi mengubah pilihan anda",
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Batal',
        confirmButtonColor: '#6BD098',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Setujui'
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
