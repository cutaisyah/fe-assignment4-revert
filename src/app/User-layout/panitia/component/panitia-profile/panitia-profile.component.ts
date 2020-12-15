import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panitia-profile',
  templateUrl: './panitia-profile.component.html',
  styleUrls: ['./panitia-profile.component.scss'],
})
export class PanitiaProfileComponent implements OnInit {
  focus;
  focus1;
  user: any;
  panitiaProfileForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.panitiaProfileForm = new FormGroup({
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

  updatePanitia() {}
}
