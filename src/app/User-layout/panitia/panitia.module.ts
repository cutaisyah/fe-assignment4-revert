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
import { ChangeStatusApprovedComponent } from './component/change-status-approved/change-status-approved.component';
import { ManageGameComponent } from './component/manage-game/manage-game.component';
import { ManageGameScoreComponent } from './component/manage-game-score/manage-game-score.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';


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
    ChangeStatusApprovedComponent,
    ManageGameComponent,
    ManageGameScoreComponent
  ],
  imports: [
    CommonModule,
    PanitiaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgSelectModule,
    NgxSpinnerModule,
    NgbModule,
  ]
})
export class PanitiaModule {}
