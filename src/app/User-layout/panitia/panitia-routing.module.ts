import { PanitiaProfileComponent } from './component/panitia-profile/panitia-profile.component';
import { CreateTournamentComponent } from './component/create-tournament/create-tournament.component';
import { PanitiaComponent } from './panitia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataPesertaComponent } from './component/data-peserta/data-peserta.component';
import { DataTournamentComponent } from './component/data-tournament/data-tournament.component';
import { CommonModule } from '@angular/common';
import { ChangeStatusTournamentComponent } from './component/change-status-tournament/change-status-tournament.component';
import { ChangeDataTournamentComponent } from './component/change-data-tournament/change-data-tournament.component';
import { ChangeStatusApprovedComponent } from './component/change-status-approved/change-status-approved.component';
import { ManageGameComponent } from './component/manage-game/manage-game.component';
import { ManageGameScoreComponent } from './component/manage-game-score/manage-game-score.component';

const routes: Routes = [
  {
    path: 'panitiaLayout',
    component: PanitiaComponent,
    children: [
      {
        path: 'createTournament',
        component: CreateTournamentComponent,
      },
      {
        path: 'getPanitia/:id',
        component: PanitiaProfileComponent,
      },
      {
        path: 'dataPeserta',
        component: DataPesertaComponent,
      },
      {
        path: 'dataPeserta/edit/:userId',
        component: ChangeStatusApprovedComponent,
      },
      {
        path: 'dataTournament',
        component: DataTournamentComponent,
      },
      {
        path: 'dataTournament/:tournamentId',
        component: ChangeStatusTournamentComponent,
      },
      {
        path: 'dataTournament/edit/:tournamentId',
        component: ChangeDataTournamentComponent,
      },
      {
        path: 'manageGame',
        component: ManageGameComponent,
      },
      {
        path: 'manageGame/:tournamentId/:matchRound',
        component: ManageGameScoreComponent,
      },
    ],
  },
];
@NgModule({
  // declarations: [DataTournamentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanitiaRoutingModule {}
