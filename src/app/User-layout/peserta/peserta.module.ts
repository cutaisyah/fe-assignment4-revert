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
  ],
})
export class PesertaModule { }
