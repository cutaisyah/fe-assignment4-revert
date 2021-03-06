import { LurahProfileComponent } from './lurah-component/lurah-profile/lurah-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LurahComponent } from './lurah.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LurahRoutingModule } from './lurah-routing.module';
import { CreatePanitiaComponent } from './lurah-component/create-panitia/create-panitia.component';
import { LurahSidebarComponent } from './lurah-sidebar/lurah-sidebar.component';
import { DataPanitiaComponent } from './lurah-component/data-panitia/data-panitia.component';
import { DataTournamentComponent } from './lurah-component/data-tournament/data-tournament.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    LurahComponent,
    CreatePanitiaComponent,
    LurahSidebarComponent,
    DataPanitiaComponent,
    LurahProfileComponent,
    DataTournamentComponent,
  ],
  imports: [
    CommonModule,
    LurahRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxSpinnerModule,
  ],
})
export class LurahModule {}
