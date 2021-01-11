import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UpdateUser, UpdateUserPassword, User } from 'src/app/models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  user: User;
  adminProfileForm: FormGroup;
  adminPasswordForm: FormGroup;
  private adminId: string;
  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.adminProfileForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      districts: new FormControl(),
    });
    this.adminPasswordForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      old_password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.adminId = paramMap.get('id');
      this.userService.getAdminProfile(this.adminId).subscribe(userData => {
        this.user = userData.data;
        console.log(this.user);
        // this.adminProfileForm.patchValue({
        //   email: this.user.email,
        //   username: this.user.username,
        //   birthdate: this.user.birthdate,
        //   phone: this.user.phone,
        //   districts: this.user.districts.district_name
        // });
      });
    });
  }

  updateAdmin() {
    if (this.adminProfileForm.invalid) {
      return;
    }
    const usernameProfile: UpdateUser = {
      username: this.adminProfileForm.get('username').value,
      birthdate: this.adminProfileForm.get('birthdate').value,
      phone: this.adminProfileForm.get('phone').value,
      email: this.adminProfileForm.get('email').value
    };
    this.userService.updateAdminProfile(usernameProfile).subscribe(
      (res) => {
        Swal.fire('Profil admin berhasil diperbarui !','','success').then(res => { location.reload() })
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
    this.adminProfileForm.reset();
  }

  updatePassword() {
    if (this.adminPasswordForm.invalid) {
      return;
    }
    const userPassword: UpdateUserPassword = {
      password: this.adminPasswordForm.get('password').value,
      old_password: this.adminPasswordForm.get('old_password').value
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
