import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-panitia-profile',
  templateUrl: './panitia-profile.component.html',
  styleUrls: ['./panitia-profile.component.scss'],
})
export class PanitiaProfileComponent implements OnInit {
  focus;
  focus1;
  data: any;
  panitiaProfileForm: FormGroup;
  private panitiaId: string;

  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.panitiaProfileForm = new FormGroup({
      email: new FormControl({value: '', disabled: true}, [Validators.required],),
      username: new FormControl(),
      birthdate: new FormControl(null, [Validators.required],),
      phone: new FormControl(),
    });
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
          this.panitiaId = paramMap.get('id');
          this.userService.getPanitiaProfile(this.panitiaId).subscribe(userData => {
            this.data = userData.data;
            this.panitiaProfileForm.patchValue({ 
              email: this.data.email, 
              username: this.data.username,
              birthdate: this.data.birthdate,
              phone: this.data.phone
            });
          });
      });
  }

  updatePanitia() {
    if (this.panitiaProfileForm.invalid) {
      return;
    }
    this.userService.updatePanitiaProfile(
      this.panitiaId,
      this.panitiaProfileForm.value.email,
      this.panitiaProfileForm.value.username,
      this.panitiaProfileForm.value.password,
      this.panitiaProfileForm.value.birthdate,
      this.panitiaProfileForm.value.phone,
    );
    this.panitiaProfileForm.reset();
  }
}
