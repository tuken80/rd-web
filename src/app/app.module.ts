import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {SearchModule} from "./search/search.module";

import {PopupComponent} from "./popup/popup.component";
import {PopupService} from "./popup/popup.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    PopupComponent,
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
    SearchModule,
    AppRoutingModule
  ],
  providers: [
      PopupService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
      PopupComponent
  ]
})
export class AppModule { }
