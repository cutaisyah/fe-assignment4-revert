import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/auth/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  public userData: any;

  constructor(
    private modalService: NgbModal,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userData = this.userService.userPayloadValue;
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
}
