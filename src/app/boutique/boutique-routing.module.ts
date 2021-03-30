import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BoutiquePageComponent} from "./pages/boutique-page.component";

const routes: Routes = [
    { path: '', component: BoutiquePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoutiqueRoutingModule { }
