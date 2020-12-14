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
  signUpForm: FormGroup;
  // public userService : UserService
  constructor(public fb: FormBuilder) {
    this.signUpForm = new FormGroup({
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

  signUp() {
    // this.user = this.signUpForm.value;
    // console.log(this.user)
    //   this.userService.signUp(this.user)
  }
}
