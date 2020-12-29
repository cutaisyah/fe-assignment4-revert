import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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

  // private username: string;

  constructor(public userService: UserService) {
    this.registerTeamForm = new FormGroup({
      username: new FormControl(),
    });
  }

  ngOnInit() {
  }

  registerTeam(){
    if (this.registerTeamForm.invalid) {
      return;
    }
    this.userService.pesertaRegisterOtherPesertaToTeam(
      this.registerTeamForm.value.username
    );
    
  }

}
