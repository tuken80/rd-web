import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {MzdTimelineModule} from "ngx-mzd-timeline";

import {HomePageComponent} from "./home-page.component";
import {PortraitTabComponent} from "./tabs/portrait-tab.component";
import {VieTabComponent} from "./tabs/vie-tab.component";
import {PassionTabComponent} from "./tabs/passion-tab.component";

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomePageComponent,
        PortraitTabComponent,
        VieTabComponent,
        PassionTabComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        MzdTimelineModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
