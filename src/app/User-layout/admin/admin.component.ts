import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit  {
  public userData: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public userService: UserService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.userData = this.userService.userPayloadValue;
    // console.log(this.userData);
  }

}
