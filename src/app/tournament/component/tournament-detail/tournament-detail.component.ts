import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {

  tournamentData: any;

  private permalink: string;

  constructor(public route: ActivatedRoute, public userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.permalink = paramMap.get('permalink');
      // console.log(this.permalink);
      this.userService.getDetailTournament(this.permalink).subscribe(data => {
        console.log(data);
        this.tournamentData = data;
      });
    });
  }

}
