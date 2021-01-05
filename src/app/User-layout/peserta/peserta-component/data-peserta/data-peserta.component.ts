import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UpdateUser, UpdateUserPassword } from 'src/app/models/User';
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
      email: new FormControl({ disabled: true }, Validators.required),
      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      districts: new FormControl(),
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


        this.pesertaProfileForm.setValue({
          email: this.user.email,
          username: this.user.username,
          // password: this.user.password, 
          birthdate: this.user.birthdate,
          phone: this.user.phone,
          districts: this.user.districts.district_name
        });
      });
      // }

    });
  }

  updateProfile() {
    const usernameProfile : UpdateUser = {
      username : this.pesertaProfileForm.get('username').value,
      birthdate : this.pesertaProfileForm.get('birthdate').value,
      phone : this.pesertaProfileForm.get('phone').value,
      email : this.pesertaProfileForm.get('email').value
    };
    this.userService.updatePesertaProfile(usernameProfile).subscribe(res => {
      Swal.fire('Good','Update Success','success').then(res =>{location.reload()})
      console.log(res);
    })
  }

  updatePassword() {
    if (this.pesertaPasswordForm.invalid) {
      return;
    }
    const userPassword : UpdateUserPassword = {
      password : this.pesertaPasswordForm.get('password').value,
      old_password : this.pesertaPasswordForm.get('old_password').value
    };
    this.userService.updatePesertaPassword(userPassword).subscribe(res => {
      Swal.fire('Good','Update Success','success').then(res =>{location.reload()})
      console.log(res);
    })
  }

}
