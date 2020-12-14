import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanitiaRoutingModule } from './panitia-routing.module';
import { PanitiaSidebarComponent } from './panitia-sidebar/panitia-sidebar.component';


@NgModule({
  declarations: [PanitiaSidebarComponent],
  imports: [
    CommonModule,
    PanitiaRoutingModule
  ]
})
export class PanitiaModule { }
