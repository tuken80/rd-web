import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-form-search',
    template: `
        <form class="rotate-listener" [formGroup]="SearchFormGroup" (ngSubmit)="search()" id="search-form">
            <mat-form-field appearance="outline" floatLabel="always" color="accent">
                <mat-label class="color-accent">Search</mat-label>
                <input matInput type="text" formControlName="search">
                <button mat-icon-button matSuffix (click)="search()" attr.aria-label="Lancer la recherche" [attr.aria-pressed]="sended">
                    <mat-icon class="color-accent rotate-target" aria-hidden="false" aria-label="Icon de recherche">search</mat-icon>
                </button>
            </mat-form-field>
        </form>
  `,
    styles: []
})
export class SearchFormComponent {
    SearchFormGroup: FormGroup = new FormGroup({
        search: new FormControl('', [])
    });
    sended = false;

    search(): void {
        this.sended = true;
    }
}
