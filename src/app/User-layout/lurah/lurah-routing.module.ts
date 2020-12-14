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
        component: LurahComponent,
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
