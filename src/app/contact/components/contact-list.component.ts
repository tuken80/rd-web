import {Component, OnInit} from '@angular/core';

import {animate, state, style, transition, trigger} from '@angular/animations';

import {ContactService} from "../services/contact.service";
import {Contact} from "../../models/contact";
import {Mail} from "../../models/mail";
import {Phone} from "../../models/phone";

export interface TableElement {
    'Sujet': string;
    'sujet_complet': string,
    'descriptions_complet': string;
    'Adresses mail': string[];
    'Numéros de téléphone': string[];
    'Détails': string[];
}

@Component({
    selector: 'app-list-contact',
    template: `
            <mat-card class="mat-elevation-z3">
                <mat-card-header fxLayout="row" fxLayoutAlign="center center">
                    <mat-card-title>DEMANDES DE CONTACT</mat-card-title>
                    <mat-card-subtitle></mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                    <table mat-table [dataSource]="dataSource" multiTemplateDataRows class="mat-elevation-z8">
                        <ng-container matColumnDef="{{column}}" *ngFor="let column of columnsToDisplay">
                            <th mat-header-cell *matHeaderCellDef>                          
                                {{column}}
                            </th>
                            <td mat-cell *matCellDef="let element" class="pointer">
                                <span *ngIf="getTypeOf(element[column]) === 'string'">{{element[column]}}</span>
                                <span *ngIf="getTypeOf(element[column]) === 'array'">
                                    <p *ngFor="let element_row of element[column]">{{element_row}}</p>
                                </span>
                                <span *ngIf="getTypeOf(element[column]) === 'empty_array'" fxLayout="row" fxLayoutAlign="begin center">
                                    <mat-icon>quiz</mat-icon>
                                </span>
                            </td>
                        </ng-container>

                        <ng-container matColumnDef="expandedDetail">
                            <td mat-cell *matCellDef="let element" [attr.colspan]="columnsToDisplay.length">
                                <div class="element-detail" [@detailExpand]="element == expandedElement ? 'expanded' : 'collapsed'" fxLayout="column" fxLayoutAlign="center space-evenly">
                                    <mat-card class="card-details">
                                        <mat-card-header>
                                            <mat-card-title>Sujet</mat-card-title>
                                        </mat-card-header>
                                        <mat-card-content>
                                            {{element['sujet_complet']}}
                                        </mat-card-content>
                                    </mat-card>
                                    <mat-card class="card-details">
                                        <mat-card-header>
                                            <mat-card-title>Descriptions</mat-card-title>
                                        </mat-card-header>
                                        <mat-card-content>
                                            {{element['descriptions_complet']}}
                                        </mat-card-content>
                                    </mat-card>
                                </div>
                            </td>
                        </ng-container>

                        <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
                        <tr mat-row *matRowDef="let element; columns: columnsToDisplay;"
                            class="element-row"
                            [class.example-expanded-row]="expandedElement === element"
                            (click)="expandedElement = expandedElement === element ? null : element">
                        </tr>
                        <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="details-row"></tr>
                    </table>
                </mat-card-content>
            </mat-card>
    `,
    styles: [
        "mat-card { margin: 40px; }",
        "mat-card-content { padding: 35px; }",
        "table { width: 100%; }",
        "tr.details-row { height: 0; }",
        "tr.element-row:not(.example-expanded-row):hover { background: whitesmoke; }",
        "tr.element-row:not(.example-expanded-row):active { background: #efefef; }",
        ".element-row td { border-bottom-width: 0; }",
        ".element-detail { overflow: hidden; display: flex; }",
        ".card-details { margin: 10px; width: 95%; }"
    ],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})
export class ContactListComponent implements OnInit {
    dataSource: TableElement[] = [];
    columnsToDisplay = ['Sujet', 'Adresses mail', 'Numéros de téléphone', 'Détails'];
    expandedElement: TableElement | null = null;

    constructor(private contacts: ContactService) {}


    ngOnInit(): void {
        this.contacts.gets().subscribe((cs: Contact[]) => this.dataSource = cs.map((c: Contact) => {
            console.log(cs);
            const element: TableElement = {
                'Sujet': `${c.sujet.substring(0, 30)} ...`,
                'sujet_complet': c.sujet,
                'descriptions_complet': c.details,
                'Adresses mail': c.user === null ? [c.mail.adresse] : c.user.mails.map((m: Mail) => m.adresse),
                'Numéros de téléphone': c.user === null ? [c.phone.number] : c.user.phones.map((p: Phone) => p.number),
                'Détails': c.user === null ? [] : [
                    c.user.genre === 'masculin' ? 'Monsieur' : 'Madame',
                    c.user.genre === 'autre' ? 'M. ' : '' + `${c.user.firstname} ${c.user.lastname}`
                ]
            };

            return element;
        }));
    }

    getTypeOf(element: (string|string[])): string {
        if (Array.isArray(element) && element.length === 0) return 'empty_array';
        else if (Array.isArray(element) && element.length > 0) return 'array';
        else return typeof element;
    }
}
