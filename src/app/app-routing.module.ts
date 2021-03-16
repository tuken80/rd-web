import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamPageComponent} from "./pages/team-page.component";
import {SkillsPageComponent} from "./pages/skills-page.component";
import {WorkPageComponent} from "./pages/work-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page.component";
import {LicensePageComponent} from "./pages/license-page.component";

const routes: Routes = [
  { path: 'team', component: TeamPageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'work', component: WorkPageComponent },
  { path: 'license', component: LicensePageComponent },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(mod => mod.ContactModule) },
  { path: 'session', loadChildren: () => import('./modules/session/session.module').then(mod => mod.SessionModule) },
  { path: '', pathMatch: 'full', redirectTo: '/team' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
