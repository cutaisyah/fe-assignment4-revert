import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PesertaRoutingModule } from './peserta-routing.module';
import { CreateTeamComponent } from './peserta-component/create-team/create-team.component';
import { DataPesertaComponent } from './peserta-component/data-peserta/data-peserta.component';
import { RegisterTeamComponent } from './peserta-component/register-team/register-team.component';
import { PesertaComponent } from './peserta.component';
import { PesertaSidebarComponent } from './peserta-sidebar/peserta-sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    PesertaComponent,
    CreateTeamComponent,
    DataPesertaComponent,
    RegisterTeamComponent,
    PesertaSidebarComponent
  ],
  imports: [
    CommonModule,
    PesertaRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxSpinnerModule,
  ],
})
export class PesertaModule { }
