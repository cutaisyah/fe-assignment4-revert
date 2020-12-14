import { LurahComponent } from './lurah.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LurahRoutingModule } from './lurah-routing.module';
import { CreatePanitiaComponent } from './lurah-component/create-panitia/create-panitia.component';
import { LurahSidebarComponent } from './lurah-sidebar/lurah-sidebar.component';
import { LurahProfileComponent } from './lurah-profile/lurah-profile.component';

@NgModule({
  declarations: [LurahComponent, CreatePanitiaComponent, LurahSidebarComponent, LurahProfileComponent],
  imports: [CommonModule, LurahRoutingModule, RouterModule],
})
export class LurahModule {}
