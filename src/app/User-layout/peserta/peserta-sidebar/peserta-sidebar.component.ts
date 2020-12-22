import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-peserta-sidebar',
  templateUrl: './peserta-sidebar.component.html',
  styleUrls: ['./peserta-sidebar.component.scss']
})
export class PesertaSidebarComponent implements OnInit {

  public userData: any;
  constructor(public userService: UserService,) { }

  ngOnInit(): void {
    this.userData = this.userService.userPayloadValue;
    console.log(this.userData);
  }

}
