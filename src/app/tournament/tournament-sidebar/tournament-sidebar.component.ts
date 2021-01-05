import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tournament-sidebar',
  templateUrl: './tournament-sidebar.component.html',
  styleUrls: ['./tournament-sidebar.component.scss']
})
export class TournamentSidebarComponent implements OnInit {
  trackY;
  trackX;
  compact;

  public districtData: any;
  public gameData: any;
  public userData: any;
  constructor(public userService: UserService) { }

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
        // console.log("districtData",this.districtData);
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
