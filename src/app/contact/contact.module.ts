import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {ContactPageComponent} from "./contact-page.component";
import {ContactFormComponent} from "./contact-form.component";

import {ContactService} from "./contact.service";

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactPageComponent,
        ContactFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        ContactRoutingModule
    ],
    providers: [
        ContactService
    ],
})
export class ContactModule { }
