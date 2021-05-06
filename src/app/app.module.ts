import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {SearchModule} from "./search/search.module";

import {AuthInterceptor} from "./session/interceptors/auth.interceptor";

import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import {MAT_DATE_LOCALE} from "@angular/material/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SearchModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class AppModule { }
