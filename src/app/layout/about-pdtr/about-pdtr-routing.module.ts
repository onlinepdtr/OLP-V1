import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPdtrComponent } from './about-pdtr.component';

const routes: Routes = [
    { path: '', component: AboutPdtrComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutPdtrRoutingModule { }
