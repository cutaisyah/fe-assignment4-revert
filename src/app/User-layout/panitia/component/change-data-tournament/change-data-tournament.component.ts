import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-data-tournament',
  templateUrl: './change-data-tournament.component.html',
  styleUrls: ['./change-data-tournament.component.scss']
})
export class ChangeDataTournamentComponent implements OnInit {
  focus;
  focus1;
  tournament: any;
  updateTournamentForm: FormGroup;
  private tournamentId: string;

  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.updateTournamentForm = new FormGroup({
      tournament_name: new FormControl({value: '', disabled: true}, [Validators.required], ),
      categories: new FormControl(null, { validators: [Validators.required] }),
      max_total_participant: new FormControl(null, { validators: [Validators.required] }),
      age_minimum: new FormControl(null, { validators: [Validators.required] }),
      description: new FormControl(null, { validators: [Validators.required] }),
      first_prize:new FormControl(null, { validators: [Validators.required] }),  
      second_prize:new FormControl(null, { validators: [Validators.required] }),  
      third_prize: new FormControl(null, { validators: [Validators.required] }), 
      // game: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.tournamentId = paramMap.get('tournamentId');
      console.log(this.tournamentId);
      this.userService.getTournamentById(this.tournamentId).subscribe(tournamentData => {
        console.log(tournamentData);
        this.tournament = tournamentData.tournament;
        console.log("DATA TOURNAMENT", this.tournament);
        this.updateTournamentForm.setValue({ 
          tournament_name: this.tournament.tournament_name, 
          categories: this.tournament.categories,
          max_total_participant: this.tournament.max_total_participant, 
          age_minimum: this.tournament.age_minimum,
          description: this.tournament.description,
          first_prize: this.tournament.first_prize,
          second_prize: this.tournament.second_prize,
          third_prize: this.tournament.third_prize,
        });
      });

    });
  }

  updateTournament(){
    if (this.updateTournamentForm.invalid) {
      return;
    }
    this.userService.updateTournament(
      this.tournamentId,
      this.updateTournamentForm.value.categories,
      this.updateTournamentForm.value.max_total_participant,
      this.updateTournamentForm.value.age_minimum,
      this.updateTournamentForm.value.description,
      this.updateTournamentForm.value.first_prize,
      this.updateTournamentForm.value.second_prize,
      this.updateTournamentForm.value.third_prize,
    );
    this.updateTournamentForm.reset();
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
