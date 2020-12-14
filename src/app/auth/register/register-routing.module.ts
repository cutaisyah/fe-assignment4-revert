import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterPesertaComponent } from './register-peserta/register-peserta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'registerPeserta', component: RegisterPesertaComponent },
  { path: 'registerAdmin', component: RegisterAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
