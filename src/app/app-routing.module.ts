import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { Role } from './models/Role';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'tournament',
    loadChildren: () =>
      import('./tournament/tournament.module').then((m) => m.TournamentModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./User-layout/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
    data: { roles: Role.admin }
  },
  {
    path: 'lurah',
    loadChildren: () =>
      import('./User-layout/lurah/lurah.module').then((m) => m.LurahModule),
    canActivate: [AuthGuard],
    data: { roles: Role.lurah }
  },
  {

    path: 'panitia',
    loadChildren: () =>
      import('./User-layout/panitia/panitia.module').then((m) => m.PanitiaModule),
      canActivate: [AuthGuard],
      data: { roles: Role.panitia }
  },
  {
    path: 'peserta',
    loadChildren: () =>
      import('./User-layout/peserta/peserta.module').then((m) => m.PesertaModule),
      canActivate: [AuthGuard],
      data: { roles: Role.peserta }

  },
  {
    path: '404',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
