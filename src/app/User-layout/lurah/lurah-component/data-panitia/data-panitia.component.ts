import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-data-panitia',
  templateUrl: './data-panitia.component.html',
  styleUrls: ['./data-panitia.component.scss']
})
export class DataPanitiaComponent implements OnInit {

  panitia: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllDataPanitia().subscribe(panitiaData =>{
      this.panitia = panitiaData
      console.log(this.panitia)
    })
  }



}
