import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JewelleryComponent } from './jewellery.component';

const routes: Routes = [
    { path: '', component: JewelleryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JewelleryRoutingModule { }
