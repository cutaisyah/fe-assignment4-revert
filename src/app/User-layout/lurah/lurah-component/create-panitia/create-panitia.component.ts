import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-create-panitia',
  templateUrl: './create-panitia.component.html',
  styleUrls: ['./create-panitia.component.scss'],
})
export class CreatePanitiaComponent implements OnInit {
  focus;
  focus1;
  user: any;
  public userData: any;
  createPanitiaForm: FormGroup;
  constructor(public fb: FormBuilder, public userService: UserService) {
    this.createPanitiaForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  createPanitia() {
    this.user = this.createPanitiaForm.value;
    console.log(this.user);
    this.userService.createPanitia(this.user);
  }
}
