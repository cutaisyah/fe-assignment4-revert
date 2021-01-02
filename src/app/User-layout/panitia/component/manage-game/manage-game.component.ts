import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from 'src/app/models/Tournament';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-game',
  templateUrl: './manage-game.component.html',
  styleUrls: ['./manage-game.component.scss']
})
export class ManageGameComponent implements OnInit {
  allTournament: Tournament[];
  constructor(public userService: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.showAllDataTournament();
  }

  showAllDataTournament(){
    // this.allTournament = this.userService.getAllDataTournament()
    this.userService.getAllDataTournamentBasedOnDistrictOngoing().subscribe(
      (tournament) => {
        this.allTournament = tournament.tournament;
        console.log(this.allTournament);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
