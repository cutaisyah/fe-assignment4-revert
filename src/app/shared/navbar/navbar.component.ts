import { UserService } from 'src/app/services/user.service';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { User } from 'src/app/models/User';
import { HostListener } from '@angular/core';

import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})


export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  public authDecoded: any;
  token;

  constructor(
    private modalService: NgbModal,
    public userService: UserService,
    public tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.checkAuth();
  }

  checkAuth() {
    // this.userData = this.userService.userPayloadValue;
    // console.log(this.tokenService.isLogin);
    if (this.tokenService.isLogin) {
      this.token = this.tokenService.getToken();
      this.authDecoded = jwt_decode(this.token);
    }else{
      console.log(`Status Login: ${this.tokenService.isLogin}`);
    }
  }

  getUserId() {

  }

  openFormModal() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.id = 10;
    modalRef.result
      .then((result) => {
        this.userService.signIn(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-danger');
    } else {
      element.classList.remove('bg-danger');
    }
  }
}
