import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentDetailComponent } from './tournament-detail/tournament-detail.component';


@NgModule({
  declarations: [TournamentListComponent, TournamentDetailComponent],
  imports: [
    CommonModule,
    TournamentRoutingModule
  ]
})
export class TournamentModule { }
