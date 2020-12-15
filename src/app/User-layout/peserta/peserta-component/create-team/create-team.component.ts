import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  focus;
  focus1;
  user: any;
  createTeamForm: FormGroup;
  registerTeamForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.createTeamForm = new FormGroup({
      team_name: new FormControl(),
    });
  }

  ngOnInit() {
  }
  createTeam(){}

}
