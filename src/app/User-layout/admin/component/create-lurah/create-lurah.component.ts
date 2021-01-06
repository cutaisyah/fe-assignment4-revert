import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-lurah',
  templateUrl: './create-lurah.component.html',
  styleUrls: ['./create-lurah.component.scss'],
})
export class CreateLurahComponent implements OnInit {
  focus;
  focus1;
  user: any;
  districtData: any;
  createLurahForm: FormGroup;
  constructor(public fb: FormBuilder, public userService: UserService) {
    // this.createLurahForm = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   username: new FormControl(),
    //   birthdate: new FormControl(),
    //   phone: new FormControl(),
    //   // roles: new FormControl(),
    //   districts: new FormControl(),
    // });
    this.createLurahForm = fb.group({
      email: new FormControl(),
      password: new FormControl(),
      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      districts: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.showAllDistrict();
  }

  showAllDistrict(){
    this.userService.getallDistrict().subscribe(
      (data) => {
        this.districtData = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createLurah() {
    this.user = this.createLurahForm.value;
    console.log(this.user);
    this.userService.createLurah(this.user);
  }
}
