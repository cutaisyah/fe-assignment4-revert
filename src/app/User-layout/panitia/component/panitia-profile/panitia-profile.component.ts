import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UpdateUser, UpdateUserPassword } from 'src/app/models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panitia-profile',
  templateUrl: './panitia-profile.component.html',
  styleUrls: ['./panitia-profile.component.scss'],
})
export class PanitiaProfileComponent implements OnInit {
  focus;
  focus1;
  data: any;
  panitiaProfileForm: FormGroup;
  panitiaPasswordForm: FormGroup;
  private panitiaId: string;

  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.panitiaProfileForm = new FormGroup({
      email: new FormControl({value: '', disabled: true}, [Validators.required],),
      username: new FormControl(),
      birthdate: new FormControl(null, [Validators.required],),
      phone: new FormControl(),
    });

    this.panitiaPasswordForm = new FormGroup({
      password: new FormControl(null,[Validators.required]),
      old_password: new FormControl(null,[Validators.required]),
    });
  }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
          this.panitiaId = paramMap.get('id');
          this.userService.getPanitiaProfile(this.panitiaId).subscribe(userData => {
            this.data = userData.data;
            this.panitiaProfileForm.patchValue({
              email: this.data.email,
              username: this.data.username,
              birthdate: this.data.birthdate,
              phone: this.data.phone
            });
          });
      });
  }

  updatePanitia() {
    if (this.panitiaProfileForm.invalid) {
      return;
    }
    const usernameProfile : UpdateUser = {
      username : this.panitiaProfileForm.get('username').value,
      birthdate : this.panitiaProfileForm.get('birthdate').value,
      phone : this.panitiaProfileForm.get('phone').value,
      email : this.panitiaProfileForm.get('email').value
    };
    this.userService.updatePanitiaProfile(usernameProfile).subscribe(
      (res) => {
        Swal.fire('Profil panitia berhasil diperbarui !','','success').then(res =>{location.reload()})
      },
      (err)=>{
        Swal.fire(
          'Maaf ada yang salah dengan proses pembaharuan profil panitia',
          err.message,
          'error'
        );
      }
    )
    this.panitiaProfileForm.reset();
  }

  updatePassword() {
    if (this.panitiaPasswordForm.invalid) {
      return;
    }
    const userPassword : UpdateUserPassword = {
      password : this.panitiaPasswordForm.get('password').value,
      old_password : this.panitiaPasswordForm.get('old_password').value
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
