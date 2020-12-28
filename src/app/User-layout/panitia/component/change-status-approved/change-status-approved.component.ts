import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-status-approved',
  templateUrl: './change-status-approved.component.html',
  styleUrls: ['./change-status-approved.component.scss']
})
export class ChangeStatusApprovedComponent implements OnInit {

  private userid: string;

  constructor(public userService: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.userid = paramMap.get('userId');
    });
  }

  changeStatusApproved(){
    this.userService.changeStatusApproved(
      this.userid
    );
  }

}
