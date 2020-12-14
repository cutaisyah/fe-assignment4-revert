import { UserService } from 'src/app/services/user.service';
import { User } from './../../../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-lurah',
  templateUrl: './create-lurah.component.html',
  styleUrls: ['./create-lurah.component.scss'],
})
export class CreateLurahComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  user: any;
  createDistrictForm: FormGroup;
  createLurahForm: FormGroup;
  constructor(public fb: FormBuilder, public userService: UserService) {
    this.createLurahForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),

      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      roles: new FormControl(),
      districts: new FormControl(),
    });

    this.createDistrictForm = new FormGroup({
      district: new FormControl(),
    });
  }

  ngOnInit(): void {}

  createLurah() {
    this.user = this.createLurahForm.value;
    console.log(this.user);
    this.userService.createLurah(this.user);
  }
  createDistrict() {}
}
