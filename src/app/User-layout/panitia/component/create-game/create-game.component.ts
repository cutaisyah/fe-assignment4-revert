import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  focus;
  focus1;
  game: any;
  createGameForm: FormGroup;
  constructor(public userService: UserService) {
    this.createGameForm = new FormGroup({
      game: new FormControl(),
    });
  }

  ngOnInit(): void {}

  createGame(){
    this.game = this.createGameForm.value;
    this.userService.createGame(this.game);
  }
}
