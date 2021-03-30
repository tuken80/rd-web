import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactListPageComponent} from "./pages/contact-list-page.component";
import {ContactFormPageComponent} from "./pages/contact-form-page.component";
import {AdminGuard} from "../session/guards/admin.guard";

const routes: Routes = [
    { path: 'list', component: ContactListPageComponent, canActivate: [AdminGuard] },
    { path: 'form', component: ContactFormPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
