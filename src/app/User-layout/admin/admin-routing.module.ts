import { CreateDistrictComponent } from './component/create-district/create-district.component';
import { AdminProfileComponent } from './component/admin-profile/admin-profile.component';
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
        path: 'adminProfile/:id',
        component: AdminProfileComponent,
      },
      {
        path: 'createDistrict',
        component: CreateDistrictComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
