import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {BoutiquePageComponent} from "./pages/boutique-page.component";
import {BoutiqueHeaderComponent} from "./components/header.component";
import {BoutiqueListComponent} from "./components/list.component";

import { BoutiqueRoutingModule } from './boutique-routing.module';

@NgModule({
    declarations: [
        BoutiquePageComponent,
        BoutiqueHeaderComponent,
        BoutiqueListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        BoutiqueRoutingModule
    ]
})
export class BoutiqueModule { }
