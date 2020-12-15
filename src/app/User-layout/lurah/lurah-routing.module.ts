import { LurahProfileComponent } from './lurah-component/lurah-profile/lurah-profile.component';
import { GetLurahComponent } from './../admin/component/get-lurah/get-lurah.component';
import { DataPanitiaComponent } from './lurah-component/data-panitia/data-panitia.component';
import { CreatePanitiaComponent } from './lurah-component/create-panitia/create-panitia.component';
import { LurahComponent } from './lurah.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LurahRoutingModule {}
