import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

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

  constructor(public userService: UserService) {
    this.createTeamForm = new FormGroup({
      team_name: new FormControl(),
      team_phone: new FormControl(),
    });
  }

  ngOnInit() {}

  create(){
    this.userService.createTeam(
      this.createTeamForm.value.team_name,
      this.createTeamForm.value.team_phone
    );
    Swal.fire('Silahkan Login Lagi');
    this.userService.logout();
  }

}
