import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-status-tournament',
  templateUrl: './change-status-tournament.component.html',
  styleUrls: ['./change-status-tournament.component.scss']
})
export class ChangeStatusTournamentComponent implements OnInit {
  
  private tournamentid: string;

  constructor(public userService: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.tournamentid = paramMap.get('tournamentId');
    });
  }

  changeToOngoing(){
    this.userService.changeTournamentStatusOngoing(
      this.tournamentid
    );
  }

  changeToCompleted(){
    this.userService.changeTournamentStatusCompleted(
      this.tournamentid
    );
  }

}
