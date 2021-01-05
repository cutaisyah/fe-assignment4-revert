import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UpdateUserPassword, User } from 'src/app/models/User';
import Swal from 'sweetalert2';

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
  adminPasswordForm: FormGroup;
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
    this.adminPasswordForm = new FormGroup({
      password: new FormControl(),
      old_password: new FormControl(),
    });
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        this.adminId = paramMap.get('id');
        this.userService.getAdminProfile(this.adminId).subscribe(userData => {
          this.user = userData.data;
          console.log(this.user);
          this.adminProfileForm.patchValue({ 
            email: this.user.email, 
            username: this.user.username,
            // password: this.user.password, 
            birthdate: this.user.birthdate,
            phone: this.user.phone,
            districts: this.user.districts.district_name
          });
        });
    });


  }

  updateAdmin() {
    if (this.adminProfileForm.invalid) {
      return;
    }
    this.userService.updatePanitiaProfile(
      this.adminId,
      this.adminProfileForm.value.email,
      this.adminProfileForm.value.username,
      this.adminProfileForm.value.birthdate,
      this.adminProfileForm.value.phone,
    );
    this.adminProfileForm.reset();
  }

  updatePassword() {
    const userPassword : UpdateUserPassword = {
      password : this.adminPasswordForm.get('password').value,
      old_password : this.adminPasswordForm.get('old_password').value
    };
    this.userService.updatePesertaPassword(userPassword).subscribe(res => {
      Swal.fire('Good','Update Success','success').then(res =>{location.reload()})
      console.log(res);
    })
  }

}
