import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NotFoundPageComponent} from "./pages/not-found-page.component";
import {UnauthorizedPageComponent} from "./pages/unauthorized-page.component";

const routes: Routes = [
    { path: '404', component: NotFoundPageComponent },
    { path: '401', component: UnauthorizedPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorsRoutingModule { }
