import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import * as XLSX from 'xlsx'; 


@Component({
  selector: 'app-data-tournament',
  templateUrl: './data-tournament.component.html',
  styleUrls: ['./data-tournament.component.scss']
})
export class DataTournamentComponent implements OnInit {

  page = 1;
  totalpage: any;
  pageSize = 10;
  alltournament: any = [];

  tournamentParticipant: any;
  countTournamentParticipant: any;
  constructor(public userService: UserService) { }

  /*name of the excel-file which will be downloaded. */ 
  fileName= 'Tournament.xlsx';  

  exportexcel(){
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }


  ngOnInit() {
    this.userService.dataTournamentByDistrict().subscribe(tournamentData => {
      this.alltournament = tournamentData;
      console.log(tournamentData)

      this.tournamentParticipant = this.alltournament?.map(match => match.register_total_participant);
      this.countTournamentParticipant = this.tournamentParticipant.reduce((a, b) => a + b, 0);

    })
  }

}
