import { User } from './../../../../models/User';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.scss'],
})
export class GetAllUsersComponent implements OnInit {
  users: User[] = [];
  role: any;

  constructor(public userService: UserService) {}

  ngOnInit() {}

  retrieveAllUser() {
    this.userService.getAllUser().subscribe(
      (res: any) => {
        this.users = res.users;
        for (let i of this.users) {
          if (i.role === undefined) {
            this.role = null;
          } else {
            this.role = i.role[0];
          }
        }
        console.log();

        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
