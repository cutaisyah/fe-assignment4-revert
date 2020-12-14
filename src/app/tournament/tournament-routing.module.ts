import { TournamentDetailComponent } from './tournament-detail/tournament-detail.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: TournamentListComponent,
  },
  {
    path: 'detail/:id',
    component: TournamentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
