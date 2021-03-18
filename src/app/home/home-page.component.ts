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
        Loading tabs...
        </ng-container>
        
        <mat-tab-group mat-stretch-tabs color="accent">
            <mat-tab *ngFor="let tab of asyncTabs | async">
                <ng-template mat-tab-label>
                    <mat-icon class="tab-icon">{{tab.icon}}</mat-icon>
                    {{tab.name}}
                </ng-template>
                <section [ngSwitch]="tab.name">
                    <app-tab-team *ngSwitchCase="'Team'"></app-tab-team>
                    <app-tab-skills *ngSwitchCase="'Skills'"></app-tab-skills>
                    <app-tab-work *ngSwitchCase="'Work'"></app-tab-work>
                </section>
            </mat-tab>
        </mat-tab-group>
  `,
    styles: [
        "mat-tab-group { margin: 0px 15px 15px 15px; }",
        ".tab-icon { margin-right: 8px; }"
    ]
})
export class HomePageComponent {
    asyncTabs: Observable<Tab[]>;

    constructor() {
        this.asyncTabs = new Observable((observer: Observer<Tab[]>) => {
            setTimeout(() => {
                observer.next([
                    { name: 'Team', icon: 'groups' },
                    { name: 'Skills', icon: 'engineering' },
                    { name: 'Work', icon: 'work' },
                ]);
            }, 1000);
        });
    }
}
