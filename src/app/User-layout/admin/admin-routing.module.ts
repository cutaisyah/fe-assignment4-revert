import { GetAllUsersComponent } from './component/get-all-users/get-all-users.component';
import { GetDistrictComponent } from './component/get-district/get-district.component';
import { CreateDistrictComponent } from './component/create-district/create-district.component';
import { AdminProfileComponent } from './component/admin-profile/admin-profile.component';
import { GetLurahComponent } from './component/get-lurah/get-lurah.component';
import { CreateLurahComponent } from './component/create-lurah/create-lurah.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'layout',
    component: AdminComponent,
    children: [
      {
        path: 'createLurah',
        component: CreateLurahComponent,
      },
      {
        path: 'getLurah',
        component: GetLurahComponent,
      },
      {
        path: 'adminProfile/:id',
        component: AdminProfileComponent,
      },
      {
        path: 'createDistrict',
        component: CreateDistrictComponent,
      },
      {
        path: 'getDistrict',
        component: GetDistrictComponent,
      },
      {
        path: 'getAllUser',
        component: GetAllUsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
