import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filter-available',
  templateUrl: './filter-available.component.html',
  styleUrls: ['./filter-available.component.scss']
})
export class FilterAvailableComponent implements OnInit {

  tournamentData: any = [];
  page = 1;
  totalpage: any;
  pageSize = 10;
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.showAvailable();
  }

  showAvailable(){
    this.userService.getAllTournamentBasedOnAvailable().subscribe(
      (data) => {
        // console.log(data);
        this.tournamentData = data;
        // console.log("tournamentData",this.tournamentData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
