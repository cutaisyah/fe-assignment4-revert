import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.scss']
})
export class RegisterTeamComponent implements OnInit {
  focus;
  focus1;
  user: any;
  createTeamForm: FormGroup;
  registerTeamForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.registerTeamForm = new FormGroup({
      username: new FormControl(),
    });
  }

  ngOnInit() {
  }

  registerTeam(){}

}
