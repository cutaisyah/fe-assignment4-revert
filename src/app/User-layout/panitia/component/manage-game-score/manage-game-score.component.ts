import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-game-score',
  templateUrl: './manage-game-score.component.html',
  styleUrls: ['./manage-game-score.component.scss']
})
export class ManageGameScoreComponent implements OnInit {
  focus;
  focus1;
  datamatch: any;
  dataTeamMatch: any;
  datatournament: any;
  lastround: any;
  updateMatchForm: FormGroup;
  private tournamentId: string;
  private match_round: string;

  constructor(public userService: UserService, public route: ActivatedRoute,) {
    this.updateMatchForm = new FormGroup({
      team: new FormControl(null, [Validators.required], ),
      score: new FormControl(null, [Validators.required], ),
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.tournamentId = paramMap.get('tournamentId');
      this.match_round = paramMap.get('matchRound');
      this.userService.getTheMatch(this.tournamentId).subscribe(matchData => {
        this.datamatch = matchData.match;
      });
      this.userService.getTheTeamMatch(this.tournamentId, this.match_round).subscribe(teamMatchData => {
        this.dataTeamMatch = teamMatchData.match;
        this.lastround = this.dataTeamMatch.filter(match => match.isEliminate == false);
      });
      this.userService.getTournamentById(this.tournamentId).subscribe(tournamentData => {
        this.datatournament = tournamentData.tournament;
      });
    });
  }

  submitScore(){
    this.userService.checkEliminate(
      this.tournamentId,
      this.datatournament.match_round
    )
  }

  updateScore(){
    if (this.updateMatchForm.invalid) {
      return;
    }
    this.userService.inputScoreMatch(
      this.updateMatchForm.value.team,
      this.updateMatchForm.value.score,
      this.datatournament.match_round
    );
  }

  
  createThirdWinner(){
    // if (this.updateMatchForm.invalid) {
    //   return;
    // }
    this.userService.thirdWinnerMatch(
      this.tournamentId,
      this.datatournament.match_round
    );
  }
  


}
