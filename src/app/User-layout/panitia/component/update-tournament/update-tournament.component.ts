import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-tournament',
  templateUrl: './update-tournament.component.html',
  styleUrls: ['./update-tournament.component.scss'],
})
export class UpdateTournamentComponent implements OnInit {
  focus;
  focus1;
  user: any;
  updateTournamentForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.updateTournamentForm = new FormGroup({
      tournament_name: new FormControl(),
      description: new FormControl(),

      total_participant: new FormControl(),
      age_minimum: new FormControl(),
      category: new FormControl(),
      images: new FormControl(),
    });
  }

  ngOnInit(): void {}

  updateTournament() {}
}
