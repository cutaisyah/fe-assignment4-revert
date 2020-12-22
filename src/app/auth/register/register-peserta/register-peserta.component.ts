import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-peserta',
  templateUrl: './register-peserta.component.html',
  styleUrls: ['./register-peserta.component.scss'],
})
export class RegisterPesertaComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  user: any;
  signUpForm: FormGroup;
  constructor(public fb: FormBuilder, public userService: UserService) {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
      email: new FormControl(null, { validators: [Validators.required,] }),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
      birthdate: new FormControl(null, { validators: [Validators.required]}),
      phone: new FormControl(null, { validators: [Validators.required] }),
      districts: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  ngOnInit(): void {}

  signUp() {
    this.user = this.signUpForm.value;
    console.log(this.user);
    this.userService.signUp(this.user);
  }
}
