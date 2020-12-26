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


@NgModule({
  declarations: [
    PanitiaComponent,
    PanitiaSidebarComponent,
    PanitiaProfileComponent,
    DataPesertaComponent,
    CreateTournamentComponent,
    UpdateTournamentComponent,
    CreateWinnerComponent,
    CreatePrizesComponent,
  ],
  imports: [
    CommonModule,
    PanitiaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PanitiaModule {}
