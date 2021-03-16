import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatStepperModule} from "@angular/material/stepper";
import { MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from "@angular/material/tooltip";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatStepperModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule
    ]
})
export class MaterialModule { }
