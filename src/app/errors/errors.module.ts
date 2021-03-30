import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {NotFoundPageComponent} from "./pages/not-found-page.component";
import {UnauthorizedPageComponent} from "./pages/unauthorized-page.component";

import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
    declarations: [
        NotFoundPageComponent,
        UnauthorizedPageComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        ErrorsRoutingModule
    ]
})
export class ErrorsModule { }
