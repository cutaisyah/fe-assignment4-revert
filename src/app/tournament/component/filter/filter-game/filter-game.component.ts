import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filter-game',
  templateUrl: './filter-game.component.html',
  styleUrls: ['./filter-game.component.scss']
})
export class FilterGameComponent implements OnInit {

  tournamentData: any = [];
  page = 1;
  totalpage: any;
  pageSize = 10;

  private gameId: string;

  constructor(public route: ActivatedRoute, public userService: UserService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.gameId = paramMap.get('gamename');
      // console.log(this.gameId);
      this.userService.getAllTournamentBasedOnGame(this.gameId).subscribe(data => {
        // console.log(data);
        this.tournamentData = data;
      });
    });
  }


}
