import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LicensePageComponent} from "./mentions/license-page.component";

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'mentions', component: LicensePageComponent },
  { path: 'session', loadChildren: () => import('./session/session.module').then(mod => mod.SessionModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule) },
  { path: 'boutique', loadChildren: () => import('./boutique/boutique.module').then(mod => mod.BoutiqueModule) },
  { path: 'contacts', loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule) },
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
