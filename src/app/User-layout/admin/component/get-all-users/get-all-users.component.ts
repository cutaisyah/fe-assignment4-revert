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

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe();
  }
}
