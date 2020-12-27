import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-panitia-sidebar',
  templateUrl: './panitia-sidebar.component.html',
  styleUrls: ['./panitia-sidebar.component.scss']
})
export class PanitiaSidebarComponent implements OnInit {

  public userData: any;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.userPayloadValue;
    // console.log(this.userData);
  }

}
