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
  peserta: any;
  pesertaTeam: any;
  createTeamForm: FormGroup;
  registerTeamForm: FormGroup;

  // private username: string;

  constructor(public userService: UserService) {
    this.registerTeamForm = new FormGroup({
      username: new FormControl(),
    });
  }

  ngOnInit() {
    this.user = this.userService.userPayloadValue;
    // console.log(this.user)

    this.userService.getPesertaProfile(this.user.id).subscribe(userData =>{
      this.peserta = userData.data;
      console.log(this.peserta)
    })

    this.userService.getPesertaTeam().subscribe(pesertaTeamData =>{
      this.pesertaTeam = pesertaTeamData
      console.log(this.pesertaTeam)
    });
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
