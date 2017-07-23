import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPdtrRoutingModule } from './about-pdtr-routing.module';
import { AboutPdtrComponent } from './about-pdtr.component';

@NgModule({
  imports: [
    CommonModule,
    AboutPdtrRoutingModule
  ],
  declarations: [AboutPdtrComponent]
})
export class AboutPdtrModule { }
