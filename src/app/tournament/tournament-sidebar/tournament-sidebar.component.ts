import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tournament-sidebar',
  templateUrl: './tournament-sidebar.component.html',
  styleUrls: ['./tournament-sidebar.component.scss']
})
export class TournamentSidebarComponent implements OnInit {
  public districtData: any;
  selectedDistrict: number;
  selectedGame: number;
  tournamentData: any;
  uniqTournament: any;
  public gameData: any;
  public userData: any;
  constructor(public userService: UserService, private config: NgSelectConfig) {
    this.config.notFoundText = 'Pencarian tidak ditemukan';
      this.config.appendTo = 'body';
      this.config.placeholder = 'Search...'
      // set the bindValue to global config when you use the same 
      // bindValue in most of the place. 
      // You can also override bindValue for the specified template 
      // by defining `bindValue` as property
      // Eg : <ng-select bindValue="some-new-value"></ng-select>
      this.config.bindValue = 'value';
   }

  ngOnInit() {
    this.userData = this.userService.userPayloadValue;
    this.showAllDistrict();
    this.showAllGame();
  }

  showAllDistrict(){
    this.userService.getallDistrict().subscribe(
      (data) => {
        // console.log(data);
        this.districtData = data;
        console.log("districtData",this.districtData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showAllGame(){
    this.userService.getallGame().subscribe(
      (data) => {
        // console.log(data);
        this.gameData = data;
        // console.log("gameData",this.gameData);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
