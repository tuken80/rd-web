import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {NotFoundPageComponent} from "./not-found-page.component";

import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
    declarations: [
        NotFoundPageComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        ErrorsRoutingModule
    ]
})
export class ErrorsModule { }
