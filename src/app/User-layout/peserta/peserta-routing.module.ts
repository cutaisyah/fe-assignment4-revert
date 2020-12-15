import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTeamComponent } from './peserta-component/create-team/create-team.component';
import { DataPesertaComponent } from './peserta-component/data-peserta/data-peserta.component';
import { RegisterTeamComponent } from './peserta-component/register-team/register-team.component';
import { PesertaComponent } from './peserta.component';

const routes: Routes = [
  {
    path: 'pesertaLayout',
    component: PesertaComponent,
    children: [
      {
        path: 'createTeam',
        component: CreateTeamComponent,
      },
      {
        path: 'getPeserta/:id',
        component: DataPesertaComponent,
      },
      {
        path: 'registerTeam/:id',
        component: RegisterTeamComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesertaRoutingModule {}
