import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

declare let $: any;

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {

  tournamentId: any;
  tournamentData: any;
  matches: any;
  teamMatch: any;
  htmldescription: any;

  teams: [];

  public permalink: string;

  constructor(public route: ActivatedRoute, public userService: UserService, public tokenService: TokenService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.permalink = paramMap.get('permalink');
      this.userService.getDetailTournament(this.permalink).subscribe(data => {
        this.tournamentData = data;
        console.log(this.tournamentData)
        this.htmldescription = this.sanitizer.bypassSecurityTrustHtml(this.tournamentData.description);
        // console.log(this.htmldescription)
      });
      this.tournamentId = paramMap.get('tournamentId');
      this.userService.getTheMatchScore(this.tournamentId).subscribe(matchdata => {
        this.matches = matchdata.match;
        // console.log(this.matches);

        if(this.tournamentData?.categories =="single elimination"){
          let minimalData = {
            teams: [],
            results: []
          };
          
          this.teamMatch = this.matches?.filter(match => match.match_round == 1);
          const teamname = this.teamMatch?.map(o => o.team.team_name)
          while (teamname?.length > 0) {
            if(teamname.length % 2 != 0){
              teamname.push(null)
            }else{
              let teamTemp = teamname.splice(0, 2)
              minimalData.teams.push(teamTemp)
            }
          }
  
          let array_score = [];
          var index = 0;
          let temp_array = [];
  
          for(const i in this.matches){
            if(index != this.matches[i].match_round){
              index = this.matches[i].match_round;
              array_score[index-1] = [];
              temp_array = [];
            }
            temp_array.push(this.matches[i].score);
            if(temp_array.length > 1){
              array_score[index-1].push(temp_array);
              temp_array = [];
            }
          }
  
          minimalData.results.push(array_score)
  
          // var minimalData = {
          //   teams : [
          //         ["CAL", "Team4"],
          //         ["Team5", "Team6"],
          //       ["TEAM7", "TEAM8"],
          //       ["TEAM9", null]
          //       ],
          //   results: [
          //               [[100,50],[32,30],[89,95],[23]],
          //               [[50,42],[84,100]],
          //              [[100,60],[60,80]]
          //             ]
          //   }
  
          $(document).ready(() => {
            $('#minimal .demo').bracket({
              init: minimalData
            })
          })
        } else{
          return;
        }
        

      });
    });



  }

  register() {
    this.userService.pesertaRegisterTournament(this.tournamentId, this.permalink);
  }


}
