import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateUserPassword } from 'src/app/models/User';

@Component({
  selector: 'app-lurah-profile',
  templateUrl: './lurah-profile.component.html',
  styleUrls: ['./lurah-profile.component.scss'],
})
export class LurahProfileComponent implements OnInit {
  focus;
  focus1;
  user: any;
  lurahId: any;
  lurahProfileForm: FormGroup;
  lurahPasswordForm: FormGroup;
  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.lurahProfileForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
    });

    this.lurahPasswordForm = new FormGroup({
      password: new FormControl(),
      old_password: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.lurahId = paramMap.get('id');
      this.userService.getAllDataLurahProfile(this.lurahId).subscribe(userData => {
        this.user = userData;
        this.lurahProfileForm.patchValue({ 
          email: this.user.email, 
          username: this.user.username,
          phone: this.user.phone
        });
      })

    })
  }

  updateLurah() {
    if (this.lurahProfileForm.invalid) {
      return;
    }
    this.userService.updateLurahProfile(
      this.lurahId,
      this.lurahProfileForm.value.email,
      this.lurahProfileForm.value.username,
      this.lurahProfileForm.value.birthdate,
      this.lurahProfileForm.value.phone,
    );
    this.lurahProfileForm.reset();

  }

  updatePassword() {
    const userPassword : UpdateUserPassword = {
      password : this.lurahPasswordForm.get('password').value,
      old_password : this.lurahPasswordForm.get('old_password').value
    };
    this.userService.updatePesertaPassword(userPassword).subscribe(res => {
      Swal.fire('Good','Update Success','success').then(res =>{location.reload()})
      console.log(res);
    })
  }

}
