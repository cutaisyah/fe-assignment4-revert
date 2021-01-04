import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-district',
  templateUrl: './create-district.component.html',
  styleUrls: ['./create-district.component.scss'],
})
export class CreateDistrictComponent implements OnInit {
  focus;
  focus1;
  disctrict: any;
  createDistrictForm: FormGroup;
  constructor(public userService: UserService) {
    this.createDistrictForm = new FormGroup({
      district: new FormControl(),
    });
  }

  ngOnInit(): void {}

  createDistrict() {
    this.disctrict = this.createDistrictForm.value;
    this.userService.createDistrict(this.disctrict);
  }
}
