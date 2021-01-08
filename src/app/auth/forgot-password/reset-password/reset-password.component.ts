import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  private reset_link: string;
  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.reset_link = paramMap.get('resetLink');
    });
  }

  resetPassword() {
    this.userService.resetPassword(
      this.resetPasswordForm.value.password,
      this.reset_link,
    );
  }
}
