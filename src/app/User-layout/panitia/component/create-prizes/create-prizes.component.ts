import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-prizes',
  templateUrl: './create-prizes.component.html',
  styleUrls: ['./create-prizes.component.scss'],
})
export class CreatePrizesComponent implements OnInit {
  focus;
  focus1;
  user: any;
  createPrizesForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.createPrizesForm = new FormGroup({
      tournament_name: new FormControl(),
      description: new FormControl(),

      total_participant: new FormControl(),
      age_minimum: new FormControl(),
      category: new FormControl(),
      images: new FormControl(),
    });
  }

  ngOnInit(): void {}

  createPrizes() {}
}
