import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() id: number;
  myForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

  ngOnInit(): void {}

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
