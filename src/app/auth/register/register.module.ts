import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterPesertaComponent } from './register-peserta/register-peserta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterPesertaComponent, RegisterAdminComponent],
  imports: [CommonModule, RegisterRoutingModule, ReactiveFormsModule],
})
export class RegisterModule {}
