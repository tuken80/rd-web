import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {BlogPageComponent} from "./pages/blog-page.component";
import {BlogHeaderComponent} from "./components/header.component";
import {BlogListComponent} from "./components/list.component";
import {CommentFormComponent} from "./forms/comment-form.component";

import { BlogRoutingModule } from './blog-routing.module';
import {ArticleService} from "./services/article.service";

@NgModule({
    declarations: [
        BlogPageComponent,
        BlogHeaderComponent,
        BlogListComponent,
        CommentFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        BlogRoutingModule
    ],
    providers: [
        ArticleService
    ]
})
export class BlogModule { }
