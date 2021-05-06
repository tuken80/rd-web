import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatStepperModule} from "@angular/material/stepper";
import {MatTableModule} from "@angular/material/table";
import { MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatTabsModule,
        MatExpansionModule,
        MatStepperModule,
        MatTableModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatCheckboxModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatIconModule
    ]
})
export class MaterialModule { }
