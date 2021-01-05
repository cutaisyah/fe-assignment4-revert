import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateLurahComponent } from './component/create-lurah/create-lurah.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GetLurahComponent } from './component/get-lurah/get-lurah.component';
import { AdminProfileComponent } from './component/admin-profile/admin-profile.component';
import { CreateDistrictComponent } from './component/create-district/create-district.component';
import { GetDistrictComponent } from './component/get-district/get-district.component';
import { GetAllUsersComponent } from './component/get-all-users/get-all-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AdminComponent,
    CreateLurahComponent,
    SidebarComponent,
    GetLurahComponent,
    AdminProfileComponent,
    CreateDistrictComponent,
    GetDistrictComponent,
    GetAllUsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ],
})
export class AdminModule {}
