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
      // {
      //   path: 'getLurah',
      //   component: GetLurahComponent,
      // },
      // {
      //   path: 'adminProfile',
      //   component: AdminProfileComponent,
      // },
      // {
      //   path: 'createDistrict',
      //   component: CreateDistrictComponent,
      // },
      // {
      //   path: 'getDistrict',
      //   component: GetDistrictComponent,
      // },
      // {
      //   path: 'getAllUser',
      //   component: GetAllUsersComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LurahRoutingModule {}
