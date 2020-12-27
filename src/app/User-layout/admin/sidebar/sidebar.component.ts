import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public userData: any;
  constructor(public userService: UserService,) { }

  ngOnInit(): void {
    this.userData = this.userService.userPayloadValue;
    // console.log(this.userData);
  }

}
