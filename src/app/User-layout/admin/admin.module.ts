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
import { ContohComponent } from './component/contoh/contoh.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

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
    ContohComponent,
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
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
})
export class AdminModule {}
