import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface Tab {
    name: string;
    icon: string;
}


@Component({
    selector: 'app-page-home',
    template: `
        <ng-container *ngIf="(asyncTabs | async) === null">
            <mat-progress-bar
                    color="accent"
                    mode="indeterminate">
            </mat-progress-bar>
        </ng-container>
        
        <mat-tab-group mat-stretch-tabs color="accent">
            <mat-tab *ngFor="let tab of asyncTabs | async">
                <ng-template mat-tab-label>
                    <mat-icon class="tab-icon">{{tab.icon}}</mat-icon>
                    {{tab.name}}
                </ng-template>
                <section [ngSwitch]="tab.name">
                    <app-tab-portrait *ngSwitchCase="'Mon portrait'"></app-tab-portrait>
                    <app-tab-vie *ngSwitchCase="'Ma vie'"></app-tab-vie>
                    <app-tab-passion *ngSwitchCase="'Mes passions'"></app-tab-passion>
                </section>
            </mat-tab>
        </mat-tab-group>
  `,
    styles: [
        "mat-tab-group { margin: 0px 15px 15px 15px; }",
        "mat-progress-bar { margin:  0; }",
        ".tab-icon { margin-right: 8px; }"
    ]
})
export class HomePageComponent {
    asyncTabs: Observable<Tab[]>;

    constructor() {
        this.asyncTabs = new Observable((observer: Observer<Tab[]>) => {
            setTimeout(() => {
                observer.next([
                    { name: 'Mon portrait', icon: 'portrait' },
                    { name: 'Ma vie', icon: 'nightlife' },
                    { name: 'Mes passions', icon: 'downhill_skiing' },
                ]);
            }, 1000);
        });
    }
}
