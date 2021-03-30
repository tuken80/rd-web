import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {AccountPageComponent} from "./pages/account-page.component";
import {SignPageComponent} from "./pages/sign-page.component";

import {ProfilFormComponent} from "./forms/profil-form.component";
import {SettingsFormComponent} from "./forms/settings-form.component";
import {SignInFormComponent} from "./forms/signin-form.component";
import {SignUpFormComponent} from "./forms/signup-form.component";

import { SessionRoutingModule } from './session-routing.module';

@NgModule({
    declarations: [
        AccountPageComponent,
        ProfilFormComponent,
        SettingsFormComponent,
        SignPageComponent,
        SignUpFormComponent,
        SignInFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        SessionRoutingModule
    ]
})
export class SessionModule { }
