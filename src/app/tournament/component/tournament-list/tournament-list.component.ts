import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {

  tournamentData: any = [];
  items = [];
  page = 1;
  // page: any;
  totalpage: any;
  pageSize = 10;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.showAllTournament();
    // for(let i = 1; i <= 100; i++){
    //   this.items.push({Name: 'Shop ' + i});
    // }
    // console.log("items",this.items);
    
  }

  showAllTournament(){
    this.userService.getAllTournament().subscribe(
      (data) => {
        console.log(data);
        this.tournamentData = data;
        console.log("tournamentData",this.tournamentData);
        // this.page = data.page;
        // this.totalpage = data.totalpage;
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
