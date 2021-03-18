import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LicensePageComponent} from "./mentions/license-page.component";

const routes: Routes = [
  { path: 'mentions', component: LicensePageComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'session', loadChildren: () => import('./session/session.module').then(mod => mod.SessionModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule) },
  { path: 'mentions', loadChildren: () => import('./mentions/mentions.module').then(mod => mod.MentionsModule) },
  { path: 'errors', loadChildren: () => import('./errors/errors.module').then(mod => mod.ErrorsModule) },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/errors/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
