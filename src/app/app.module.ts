import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from "./modules/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {TeamPageComponent} from "./pages/team-page.component";
import {SkillsPageComponent} from "./pages/skills-page.component";
import {WorkPageComponent} from "./pages/work-page.component";
import {LicensePageComponent} from "./pages/license-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page.component";

import {SearchFormComponent} from "./forms/search-form.component";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    TeamPageComponent,
    SkillsPageComponent,
    WorkPageComponent,
    LicensePageComponent,
    NotFoundPageComponent,
    SearchFormComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
