import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {AuthService} from "../../session/services/auth.service";
import {ContactService} from "../services/contact.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-form-contact',
    template: `
        <form [formGroup]="formContact" (ngSubmit)="submit()">
            <mat-card class="mat-elevation-z3">
                <mat-card-header fxLayout="row" fxLayoutAlign="center center">
                    <mat-card-title>FORMULAIRE</mat-card-title>
                    <mat-card-subtitle></mat-card-subtitle>
                </mat-card-header>
                <mat-card-content fxLayout="column" fxLayoutAlign="center space-around">
                    <div fxLayout="row" fxLayoutAlign="space-between center" *ngIf="!isLoggedIn">
                        <mat-form-field class="rotate-listener" fxFlex="45" appearance="outline" floatLabel="always" color="accent">
                            <mat-label class="color-accent">Adresse mail</mat-label>
                            <input matInput type="email" formControlName="mail" required>
                            <mat-icon class="rotate-target" matSuffix>mail</mat-icon>
                            <mat-error *ngIf="formContact.controls.mail.invalid">{{getMailError()}}</mat-error>
                        </mat-form-field>
                        <mat-form-field class="rotate-listener" fxFlex="45" appearance="outline" floatLabel="always" color="accent">
                            <mat-label class="color-accent">Numéro de téléphone</mat-label>
                            <span matPrefix>+33</span>
                            <input matInput type="tel" minlength="9" maxlength="9" pattern="[0-9]{9}" formControlName="phone" required>
                            <mat-icon class="rotate-target" matSuffix>phone</mat-icon>
                            <mat-hint align="end">{{formContact.controls.phone.value.length}}/9</mat-hint>
                            <mat-error *ngIf="formContact.controls.phone.invalid">{{getPhoneError()}}</mat-error>
                        </mat-form-field>                        
                    </div>
                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                        <mat-label class="color-accent">Sujet</mat-label>
                        <input matInput type="text" formControlName="sujet" maxlength="250" required>
                        <mat-icon class="rotate-target" matSuffix>subject</mat-icon>
                        <mat-hint align="end">{{formContact.controls.sujet.value?.length || 0}}/250</mat-hint>
                        <mat-error *ngIf="formContact.controls.sujet.invalid">{{getSubjectError()}}</mat-error>
                    </mat-form-field>
                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                        <mat-label class="color-accent">Descriptions</mat-label>
                        <textarea matInput formControlName="details" maxlength="700" required></textarea>
                        <mat-icon class="rotate-target" matSuffix>description</mat-icon>
                        <mat-hint align="end">{{formContact.controls.details.value?.length || 0}}/700</mat-hint>
                        <mat-error *ngIf="formContact.controls.details.invalid">{{getDescriptionsError()}}</mat-error>
                    </mat-form-field>
                </mat-card-content>
                <mat-card-actions fxLayout="row" fxLayoutAlign="center center">
                    <button class="stroked-primary" mat-stroked-button color="accent" type="submit" [disabled]="formContact.touched && formContact.invalid">ENVOYER LA DEMANDE</button>
                </mat-card-actions>
            </mat-card>
        </form>
    `,
    styles: [
        "mat-card { margin: 50px; }",
        "mat-card-content { padding: 35px; }"
    ]
})
export class ContactFormComponent {
    formContact: FormGroup;
    isLoggedIn: boolean = false;
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(private fb: FormBuilder, private router: Router, private auth: AuthService, private contacts: ContactService, private _snackBar: MatSnackBar) {
        this.isLoggedIn = this.auth.isLoggedIn;

        this.formContact = this.fb.group({
            mail: this.isLoggedIn ? undefined : ['', [Validators.required, Validators.email]],
            phone: this.isLoggedIn ? undefined : ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]{9}')]],
            sujet: ['', Validators.required],
            details: ['', Validators.required],
        })
    }

    submit(): void {
        if (this.formContact.valid) {
            this.contacts.add(this.formContact.value).subscribe(c => {
                this._snackBar.open('Connexion effectuée.', 'OK', {
                    duration: 3500,
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                });

                this.router.navigateByUrl(this.auth.redirectUrl);
            });
        }
    }

    getMailError(): string {
        if (this.formContact.controls.mail.hasError('required'))
            return 'Obligatoire.';

        if (this.formContact.controls.mail.hasError('email'))
            return 'Format incorrect.';

        return '';
    }

    getPhoneError(): string {
        if (this.formContact.controls.phone.hasError('required'))
            return 'Obligatoire.';

        if (this.formContact.controls.phone.hasError('minlength'))
            return '9 charactères numéric minimum.';

        if (this.formContact.controls.phone.hasError('maxlength'))
            return '9 charactères numéric maximum.';

        if (this.formContact.controls.phone.hasError('pattern'))
            return 'Seul format accepté +33699999999.';

        return '';
    }

    getSubjectError(): string {
        if (this.formContact.controls.sujet.hasError('required'))
            return 'Obligatoire.';

        if (this.formContact.controls.sujet.hasError('maxlength'))
            return '250 charactères numéric maximum.';

        return '';
    }

    getDescriptionsError(): string {
        if (this.formContact.controls.details.hasError('required'))
            return 'Obligatoire.';

        if (this.formContact.controls.details.hasError('maxlength'))
            return '700 charactères numéric maximum.';

        return '';
    }
}
