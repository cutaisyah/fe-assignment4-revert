import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {

  tournamentData: any;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.showAllTournament();
  }

  showAllTournament(){
    this.userService.getAllTournament().subscribe(
      (data) => {
        this.tournamentData = data.tournament;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
