import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  focus;
  focus1;
  createGameForm: FormGroup;
  constructor(public userService: UserService) {
    this.createGameForm = new FormGroup({
      game_name: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {}

  createGame(){
    if (this.createGameForm.invalid) {
      return;
    }
    this.userService.createGame(
      this.createGameForm.value.game_name
    );
    this.createGameForm.reset();
  }
}
