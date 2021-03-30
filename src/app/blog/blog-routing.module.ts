import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BlogPageComponent} from "./pages/blog-page.component";

const routes: Routes = [
    { path: '', component: BlogPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
