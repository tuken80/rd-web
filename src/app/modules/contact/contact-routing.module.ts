import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactPageComponent} from "./contact-page.component";

const routes: Routes = [
    { path: 'form', component: ContactPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
