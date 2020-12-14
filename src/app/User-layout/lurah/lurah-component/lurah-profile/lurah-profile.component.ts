import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lurah-profile',
  templateUrl: './lurah-profile.component.html',
  styleUrls: ['./lurah-profile.component.scss'],
})
export class LurahProfileComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  user: any;
  lurahProfileForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.lurahProfileForm = new FormGroup({
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

  updateLurah() {}
}
