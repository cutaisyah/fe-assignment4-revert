import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent implements OnInit {
  focus;
  focus1;
  user: any;
  createTournamentForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.createTournamentForm = new FormGroup({
      tournament_name: new FormControl(),
      description: new FormControl(),

      total_participant: new FormControl(),
      age_minimum: new FormControl(),
      category: new FormControl(),
      images: new FormControl(),
    });
  }

  ngOnInit(): void {}

  createTournament() {}
}
