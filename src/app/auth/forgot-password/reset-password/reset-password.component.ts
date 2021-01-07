import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UpdateUserPassword } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  user: any;
  resetPasswordForm: FormGroup;
  private resetLink: string;
  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.resetLink = paramMap.get('resetLink');
      // console.log(this.oldPassword);
    });
  }

  resetPassword() {
    // console.log(this.resetPasswordForm.value.password);
    this.userService.resetPassword(
      this.resetPasswordForm.value.password,
      this.resetLink,
    );
    // console.log(this.resetPassword());
  }
}
