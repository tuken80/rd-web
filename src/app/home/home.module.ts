import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {HomePageComponent} from "./home-page.component";
import {TeamTabComponent} from "./tabs/team-tab.component";
import {SkillsTabComponent} from "./tabs/skills-tab.component";
import {WorkTabComponent} from "./tabs/work-tab.component";

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomePageComponent,
        TeamTabComponent,
        SkillsTabComponent,
        WorkTabComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
