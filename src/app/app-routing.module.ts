import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  },
  {
    path: 'lurah',
    loadChildren: () =>
      import('./User-layout/lurah/lurah.module').then((m) => m.LurahModule),
  },
  {
    path: 'peserta',
    loadChildren: () =>
      import('./User-layout/peserta/peserta.module').then((m) => m.PesertaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
