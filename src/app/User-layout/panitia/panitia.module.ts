import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanitiaComponent } from './panitia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanitiaRoutingModule } from './panitia-routing.module';
import { PanitiaSidebarComponent } from './panitia-sidebar/panitia-sidebar.component';
import { PanitiaProfileComponent } from './component/panitia-profile/panitia-profile.component';
import { DataPesertaComponent } from './component/data-peserta/data-peserta.component';
import { CreateTournamentComponent } from './component/create-tournament/create-tournament.component';
import { UpdateTournamentComponent } from './component/update-tournament/update-tournament.component';
import { CreateWinnerComponent } from './component/create-winner/create-winner.component';
import { CreatePrizesComponent } from './component/create-prizes/create-prizes.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { DataTournamentComponent } from './component/data-tournament/data-tournament.component';
import { ChangeDataTournamentComponent } from './component/change-data-tournament/change-data-tournament.component';
import { ChangeStatusTournamentComponent } from './component/change-status-tournament/change-status-tournament.component';


@NgModule({
  declarations: [
    PanitiaComponent,
    PanitiaSidebarComponent,
    PanitiaProfileComponent,
    DataPesertaComponent,
    DataTournamentComponent,
    CreateTournamentComponent,
    UpdateTournamentComponent,
    CreateWinnerComponent,
    CreatePrizesComponent,
    ChangeStatusTournamentComponent,
    ChangeDataTournamentComponent,
  ],
  imports: [
    CommonModule,
    PanitiaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ]
})
export class PanitiaModule {}
