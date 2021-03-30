import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AccountPageComponent} from "./pages/account-page.component";
import {SignPageComponent} from "./pages/sign-page.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
    { path: 'account', component: AccountPageComponent, canActivate: [AuthGuard] },
    { path: 'sign', component: SignPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionRoutingModule { }
