import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentListComponent } from './component/tournament-list/tournament-list.component';
import { TournamentDetailComponent } from './component/tournament-detail/tournament-detail.component';
import { RouterModule } from '@angular/router';
import { TournamentSidebarComponent } from './tournament-sidebar/tournament-sidebar.component';
import { TournamentComponent } from './tournament.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterGameComponent } from './component/filter/filter-game/filter-game.component';
import { FilterDistrictComponent } from './component/filter/filter-district/filter-district.component';
import { FilterAvailableComponent } from './component/filter/filter-available/filter-available.component';


@NgModule({
  declarations: [
    TournamentComponent,
    TournamentListComponent,
    TournamentDetailComponent,
    TournamentSidebarComponent,
    FilterGameComponent,
    FilterDistrictComponent,
    FilterAvailableComponent
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    RouterModule,
    NgbModule,
  ],
})
export class TournamentModule { }
