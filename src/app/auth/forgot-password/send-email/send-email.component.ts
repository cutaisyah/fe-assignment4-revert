import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  user: any;
  sendEmailForm: FormGroup;
  constructor( public userService: UserService) {
    this.sendEmailForm = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required,] }),
    });
  }

  ngOnInit(): void {}

  // signUp() {
  //   this.user = this.signUpForm.value;
  //   console.log(this.user);
  //   this.userService.signUp(this.user);
  // }

  sendEmail() {
    this.user = this.sendEmailForm.value;
    console.log(this.user);
    this.userService.sendEmail(this.user);
  }
}
