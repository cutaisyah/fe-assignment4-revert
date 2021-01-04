import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filter-district',
  templateUrl: './filter-district.component.html',
  styleUrls: ['./filter-district.component.scss']
})
export class FilterDistrictComponent implements OnInit {

  tournamentData: any = [];
  page = 1;
  totalpage: any;
  pageSize = 10;

  private districtId: string;

  constructor(public route: ActivatedRoute, public userService: UserService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.districtId = paramMap.get('districtId');
      // console.log(this.districtId);
      this.userService.getAllTournamentBasedOnDistrict(this.districtId).subscribe(data => {
        // console.log(data);
        this.tournamentData = data;
      });
    });

  }

}
