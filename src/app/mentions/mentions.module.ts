import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {LicensePageComponent} from "./license-page.component";

import { MentionsRoutingModule } from './mentions-routing.module';

@NgModule({
    declarations: [
        LicensePageComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        MentionsRoutingModule
    ]
})
export class MentionsModule { }
