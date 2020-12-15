import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-peserta',
  templateUrl: './data-peserta.component.html',
  styleUrls: ['./data-peserta.component.scss']
})
export class DataPesertaComponent implements OnInit {
  
  test: Date = new Date();
  focus;
  focus1;
  user: any;
  pesertaProfileForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.pesertaProfileForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      roles: new FormControl(),
      districts: new FormControl(),
    });
  }

  ngOnInit() {
  }

  updateProfile() {

  }

}
