import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LicensePageComponent} from "./license-page.component";

const routes: Routes = [
    { path: 'license', component: LicensePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MentionsRoutingModule { }
