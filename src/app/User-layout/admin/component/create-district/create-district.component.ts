import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-district',
  templateUrl: './create-district.component.html',
  styleUrls: ['./create-district.component.scss'],
})
export class CreateDistrictComponent implements OnInit {
  focus;
  focus1;
  user: any;
  createDistrictForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.createDistrictForm = new FormGroup({
      district: new FormControl(),
    });
  }

  ngOnInit(): void {}

  createDistrict() {}
}
