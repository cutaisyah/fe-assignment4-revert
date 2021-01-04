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
  ],
})
export class LurahModule {}
