import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateLurahComponent } from './component/create-lurah/create-lurah.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AdminProfileComponent } from './component/admin-profile/admin-profile.component';
import { CreateDistrictComponent } from './component/create-district/create-district.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AdminComponent,
    CreateLurahComponent,
    SidebarComponent,
    AdminProfileComponent,
    CreateDistrictComponent,
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
    NgxSpinnerModule,
    FormsModule
  ],
})
export class AdminModule {}
