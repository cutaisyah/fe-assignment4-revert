import { PanitiaProfileComponent } from './component/panitia-profile/panitia-profile.component';
import { CreateTournamentComponent } from './component/create-tournament/create-tournament.component';
import { PanitiaComponent } from './panitia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataPesertaComponent } from './component/data-peserta/data-peserta.component';

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
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanitiaRoutingModule {}
