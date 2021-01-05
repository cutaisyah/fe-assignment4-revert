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
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgSelectModule,
    FormsModule
  ],
})
export class AdminModule {}
