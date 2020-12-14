import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.scss'],
})
export class GetAllUsersComponent implements OnInit {
  constructor(private service: UserService) {}

  ngOnInit(): void {}

  bismillah() {
    this.service.getAllProfile().subscribe(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
