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
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


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
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgSelectModule,
    FormsModule
  ],
})
export class TournamentModule { }
