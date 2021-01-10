import { LurahProfileComponent } from './lurah-component/lurah-profile/lurah-profile.component';
import { DataPanitiaComponent } from './lurah-component/data-panitia/data-panitia.component';
import { CreatePanitiaComponent } from './lurah-component/create-panitia/create-panitia.component';
import { LurahComponent } from './lurah.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTournamentComponent } from './lurah-component/data-tournament/data-tournament.component';

const routes: Routes = [
  {
    path: 'lurahLayout',
    component: LurahComponent,
    children: [
      {
        path: 'createPanitia',
        component: CreatePanitiaComponent,
      },
      {
        path: 'getLurah/:id',
        component: LurahProfileComponent,
      },
      {
        path: 'dataPanitia',
        component: DataPanitiaComponent,
      },
      {
        path: 'dataTournament',
        component: DataTournamentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LurahRoutingModule {}
