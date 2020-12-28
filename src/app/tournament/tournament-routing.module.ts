import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        path: 'detail/:id',
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
