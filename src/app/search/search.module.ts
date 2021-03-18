import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MaterialModule} from "../material.module";

import {SearchFormComponent} from "./search-form.component";
import {SearchService} from "./search.service";

@NgModule({
    declarations: [
        SearchFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        SearchFormComponent
    ],
    providers: [
        SearchService
    ]
})
export class SearchModule { }
