import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  user: User;
  adminProfileForm: FormGroup;
  private adminId: string;
  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.adminProfileForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      // roles: new FormControl(),
      districts: new FormControl(),
    });
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //  if (paramMap.has('id')) {
        // this.mode = 'edit';
        this.adminId = paramMap.get('id');
        
        this.userService.getAdminProfile(this.adminId).subscribe(userData => {
          this.user = userData.data;
          console.log(this.user);
          this.adminProfileForm.setValue({ 
            email: this.user.email, 
            username: this.user.username,
            password: this.user.password, 
            birthdate: this.user.birthdate,
            phone: this.user.phone,
            districts: this.user.districts.district_name
          });
        });
      // }
      
    });


  }

  updateAdmin() { }
}
