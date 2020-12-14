import { UserService } from 'src/app/services/user.service';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/auth/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userData: any;

  constructor(
    public tokenService: TokenService,
    public userService: UserService
  ) {}
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
