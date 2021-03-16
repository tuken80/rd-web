import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AccountPageComponent} from "./pages/account-page.component";

const routes: Routes = [
    { path: 'account', component: AccountPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionRoutingModule { }
