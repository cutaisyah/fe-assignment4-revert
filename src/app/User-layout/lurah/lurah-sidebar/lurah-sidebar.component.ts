import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lurah-sidebar',
  templateUrl: './lurah-sidebar.component.html',
  styleUrls: ['./lurah-sidebar.component.scss']
})
export class LurahSidebarComponent implements OnInit {

  public userData: any;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.userPayloadValue;
    console.log(this.userData);
  }

}
