import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // events: string[] = [];
  // opened: boolean;
  public userData: any;
  constructor(public userService: UserService) {}
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  ngOnInit(): void {}

  checkRole() {
    this.userData = this.userService.userPayloadValue.roles[0];
    console.log(this.userData);
  }
}
