import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { mimeType } from './mime-type.validator';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent implements OnInit {
  focus;
  focus1;
  user: any;
  createTournamentForm: FormGroup;
  imagePreview: string;
  isImageError = false;
  constructor(public userService: UserService) {
    this.createTournamentForm = new FormGroup({
      tournament_name: new FormControl(null, { validators: [Validators.required] }),
      permalink: new FormControl(null, { validators: [Validators.required] }),
      categories: new FormControl(null, { validators: [Validators.required] }),
      total_participant: new FormControl(null, { validators: [Validators.required] }),
      age_minimum: new FormControl(null, { validators: [Validators.required] }),
      description: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] })
    });
  }

  ngOnInit(): void {}

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.createTournamentForm.patchValue({ image: file });
    this.createTournamentForm.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  createTournament() {
    if (this.createTournamentForm.invalid) {
      return;
    }
    if (this.createTournamentForm.get('image').invalid) {
      this.isImageError = true;
    }
      this.userService.createTournament(
        this.createTournamentForm.value.tournament_name,
        this.createTournamentForm.value.permalink,
        this.createTournamentForm.value.categories,
        this.createTournamentForm.value.total_participant,
        this.createTournamentForm.value.age_minimum,
        this.createTournamentForm.value.description,
        this.createTournamentForm.value.image,
      );
    this.createTournamentForm.reset();
  }
}
