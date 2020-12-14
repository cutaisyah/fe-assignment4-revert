import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss'],
})
export class RegisterAdminComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  user: any;
  signUpAdminForm: FormGroup;

  constructor(public fb: FormBuilder, public userService: UserService) {
    this.signUpAdminForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      roles: new FormControl(),
      districts: new FormControl(),
    });
  }

  ngOnInit(): void {}

  signUpAdmin() {
    this.user = this.signUpAdminForm.value;
    this.userService.signUpAdmin(this.user);
  }
}
