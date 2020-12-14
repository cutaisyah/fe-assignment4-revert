import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any;
  myForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService
  ) {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }
  ngOnInit(): void {}

  signIn() {
    this.user = this.myForm.value;
    console.log(this.user);
    this.userService.signIn(this.user);
  }
}
