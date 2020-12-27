import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Tournament } from 'src/app/models/Tournament';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-data-tournament',
  templateUrl: './data-tournament.component.html',
  styleUrls: ['./data-tournament.component.scss']
})
export class DataTournamentComponent implements OnInit {

  allTournament: Tournament[];

  constructor(public userService: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.showAllDataTournament();
  }

  showAllDataTournament(){
    // this.allTournament = this.userService.getAllDataTournament()
    this.userService.getAllDataTournamentBasedOnDistrict().subscribe(
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
