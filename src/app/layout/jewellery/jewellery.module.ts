import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JewelleryRoutingModule } from './jewellery-routing.module';
import { JewelleryComponent } from './jewellery.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        JewelleryRoutingModule,
        PageHeaderModule
    ],
    declarations: [JewelleryComponent]
})
export class JewelleryModule { }
