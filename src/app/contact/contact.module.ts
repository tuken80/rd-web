import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {ContactFormPageComponent} from "./pages/contact-form-page.component";
import {ContactHeaderComponent} from "./components/header.component";
import {ContactListPageComponent} from "./pages/contact-list-page.component";
import {ContactFormComponent} from "./forms/contact-form.component";
import {ContactListComponent} from "./components/contact-list.component";

import {ContactService} from "./services/contact.service";

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactFormPageComponent,
        ContactHeaderComponent,
        ContactListPageComponent,
        ContactFormComponent,
        ContactListComponent
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
