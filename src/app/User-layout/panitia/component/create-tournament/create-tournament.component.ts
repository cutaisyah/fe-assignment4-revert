import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { mimeType } from './mime-type.validator';
import { UserService } from 'src/app/services/user.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent implements OnInit {
  gameData: any;
  focus;
  focus1;
  selectedGame: number;
  selectedKategori: number;
  user: any;
  permalinkchanged: any;
  createTournamentForm: FormGroup;
  imagePreview: string;
  isImageError = false;
  kategori = [
    { kategori_name: "single elimination" },
    { kategori_name: "free for all" },
  ]

  constructor(public userService: UserService) {
    this.createTournamentForm = new FormGroup({
      tournament_name: new FormControl(null, { validators: [Validators.required] }),
      permalink: new FormControl(null, { validators: [Validators.required] }),
      categories: new FormControl(null, { validators: [Validators.required] }),
      max_total_participant: new FormControl(null, { validators: [Validators.required] }),
      age_minimum: new FormControl(null, { validators: [Validators.required] }),
      description: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] }),
      first_prize: new FormControl(null, { validators: [Validators.required] }),
      second_prize: new FormControl(null, { validators: [Validators.required] }),
      third_prize: new FormControl(null, { validators: [Validators.required] }),
      game: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  ngOnInit() {
    this.showAllGame();
    this.kategori;
  }

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
      this.createTournamentForm.value.permalink.toLowerCase().split(' ').join('-'),
      this.createTournamentForm.value.categories,
      this.createTournamentForm.value.max_total_participant,
      this.createTournamentForm.value.age_minimum,
      this.createTournamentForm.value.description,
      this.createTournamentForm.value.image,
      this.createTournamentForm.value.first_prize,
      this.createTournamentForm.value.second_prize,
      this.createTournamentForm.value.third_prize,
      this.createTournamentForm.value.game,
    );
    this.createTournamentForm.reset();
  }

  showAllGame() {
    this.userService.getallGame().subscribe(
      (data) => {
        this.gameData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

}
