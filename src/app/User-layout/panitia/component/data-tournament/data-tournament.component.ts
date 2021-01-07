import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Tournament } from 'src/app/models/Tournament';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data-tournament',
  templateUrl: './data-tournament.component.html',
  styleUrls: ['./data-tournament.component.scss']
})
export class DataTournamentComponent implements OnInit {

  allTournament: Tournament[];

  constructor(public userService: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.showAllDataTournament();
  }

  showAllDataTournament(){
    // this.allTournament = this.userService.getAllDataTournament()
    this.userService.getAllDataTournamentBasedOnDistrict().subscribe(
      (tournament) => {
        this.allTournament = tournament.tournament;
        console.log(this.allTournament);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  status(id){
    Swal.fire({
      title: 'Apakah Anda Ingin Mengubah Status Turnamen ?',
      text:"Pilih 'sedang berjalan' atau 'selesai'",
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: 'Batal',
      confirmButtonText: `Sedang Berjalan`,
      denyButtonText: `Selesai`,
      confirmButtonColor: '#6BD098',
      denyButtonColor:'#FCD27B',
      cancelButtonColor: '#d33',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.changeToOngoing(id)
      } else if (result.isDenied) {
        this.changeToCompleted(id)
      }
    })
  }

  changeToOngoing(id){
    this.userService.changeTournamentStatusOngoing(
      id
    );
    this.ngOnInit()
  }

  changeToCompleted(id){
    this.userService.changeTournamentStatusCompleted(
      id
    );
    this.ngOnInit()
  }


}
