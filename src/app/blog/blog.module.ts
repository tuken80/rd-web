import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {BlogPageComponent} from "./pages/blog-page.component";
import {BlogHeaderComponent} from "./components/header.component";
import {BlogListComponent} from "./components/list.component";

import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
    declarations: [
        BlogPageComponent,
        BlogHeaderComponent,
        BlogListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        BlogRoutingModule
    ]
})
export class BlogModule { }
