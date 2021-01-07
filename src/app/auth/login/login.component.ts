import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() id: number;
  myForm: FormGroup;
  constructor(public activeModal: NgbActiveModal, private router: Router, private formBuilder: FormBuilder, private spinner: NgxSpinnerService) {}

  ngOnInit(){
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  submitForm() {
    this.spinner.show();
 
    setTimeout(() => {
      this.activeModal.close(this.myForm.value);
      this.spinner.hide();
    }, 3000);
    
  }

  forgetPass(){
    this.router.navigate(['/forgot/sendEmail']);
    this.activeModal.dismiss('Cross click');
  }

}
