import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-create-panitia',
  templateUrl: './create-panitia.component.html',
  styleUrls: ['./create-panitia.component.scss'],
})
export class CreatePanitiaComponent implements OnInit {
  focus;
  focus1;
  user: any;
  createPanitiaForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.createPanitiaForm = new FormGroup({
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

  createPanitia() {}
}
