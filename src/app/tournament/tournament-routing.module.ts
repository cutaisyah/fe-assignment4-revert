import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterAvailableComponent } from './component/filter/filter-available/filter-available.component';
import { FilterDistrictComponent } from './component/filter/filter-district/filter-district.component';
import { FilterGameComponent } from './component/filter/filter-game/filter-game.component';

import { TournamentDetailComponent } from './component/tournament-detail/tournament-detail.component';
import { TournamentListComponent } from './component/tournament-list/tournament-list.component';
import { TournamentComponent } from './tournament.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentComponent,
    children: [
      {
        path: 'list',
        component: TournamentListComponent,
      },
      {
        path: 'game/:gamename',
        component: FilterGameComponent,
      },
      {
        path: 'district/:districtId',
        component: FilterDistrictComponent,
      },
      {
        path: 'available',
        component: FilterAvailableComponent,
      },
      {
        path: 'detail/:permalink',
        component: TournamentDetailComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule { }
