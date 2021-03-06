import { PesertaProfile } from './../../../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UpdateUserPassword } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data-peserta',
  templateUrl: './data-peserta.component.html',
  styleUrls: ['./data-peserta.component.scss']
})
export class DataPesertaComponent implements OnInit {

  test: Date = new Date();
  focus;
  focus1;
  user: any;
  pesertaProfileForm: FormGroup;
  pesertaPasswordForm: FormGroup;
  private pesertaId: string;
  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.pesertaProfileForm = new FormGroup({
      username: new FormControl(),
    });

    this.pesertaPasswordForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      old_password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      //  if (paramMap.has('id')) {
      // this.mode = 'edit';
      this.pesertaId = paramMap.get('id');
      console.log(this.pesertaId);
      this.userService.getPesertaProfile(this.pesertaId).subscribe(userData => {
        this.user = userData.data;
        console.log(this.user);


        // this.pesertaProfileForm.setValue({
        //   email: this.user.email,
        //   username: this.user.username,
        //   // password: this.user.password,
        //   birthdate: this.user.birthdate,
        //   phone: this.user.phone,
        //   districts: this.user.districts.district_name
        // });
      });
      // }

    });
  }

  updateProfile() {
    if (this.pesertaProfileForm.invalid) {
      return;
    }
    const usernameProfile : PesertaProfile = {
      username : this.pesertaProfileForm.get('username').value,
    };
    this.userService.updatePesertaProfile(usernameProfile).subscribe(
      (res) => {
        Swal.fire('Profil panitia berhasil diperbarui !','','success').then(res =>{location.reload()})
        console.log(res);
      },
      (err)=>{
        Swal.fire(
          'Maaf ada yang salah dengan proses pembaharuan profil panitia',
          err.message,
          'error'
        );
      }
    )
  }

  updatePassword() {
    if (this.pesertaPasswordForm.invalid) {
      return;
    }
    const userPassword : UpdateUserPassword = {
      password : this.pesertaPasswordForm.get('password').value,
      old_password : this.pesertaPasswordForm.get('old_password').value
    };
    this.userService.updatePesertaPassword(userPassword).subscribe(
      (success) => {
        console.log(success);
        Swal.fire('Berhasil Memperbaharui kata sandi', '', 'success').then(res => { location.reload() })
      },
      (err) => {
        console.log(err);
        Swal.fire(
          'Maaf ada yang salah dengan proses pembaharuan kata sandi',
          err.message,
          'error'
        );
      }
    )
  }

}
