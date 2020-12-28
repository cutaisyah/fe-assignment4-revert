import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentListComponent } from './component/tournament-list/tournament-list.component';
import { TournamentDetailComponent } from './component/tournament-detail/tournament-detail.component';
import { RouterModule } from '@angular/router';
import { TournamentSidebarComponent } from './tournament-sidebar/tournament-sidebar.component';
import { TournamentComponent } from './tournament.component';


@NgModule({
  declarations: [
    TournamentComponent,
    TournamentListComponent,
    TournamentDetailComponent,
    TournamentSidebarComponent,
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    RouterModule,
  ]
})
export class TournamentModule { }
