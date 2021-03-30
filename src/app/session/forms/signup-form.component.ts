import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

import {
    MAT_MOMENT_DATE_ADAPTER_OPTIONS,
    MAT_MOMENT_DATE_FORMATS,
    MomentDateAdapter
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';

import {AuthService} from "../services/auth.service";

@Component({
    selector: 'app-form-signup',
    template: `
                    <mat-card class="mat-elevation-z3">
                        <mat-card-header fxLayout="row" fxLayoutAlign="center center">
                            <mat-card-title>Inscription</mat-card-title>
                        </mat-card-header>
        
                        <mat-card-content>
                        <mat-horizontal-stepper linear #stepper>    
                           <mat-step [stepControl]="idsFormGroup">
                               <ng-template matStepLabel>Identifiants</ng-template>
                               <form [formGroup]="idsFormGroup" fxLayout="column" fxLayoutAlign="center">
                                   <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                                       <mat-label class="color-accent">Adresse mail</mat-label>
                                       <input matInput type="email" name="mail" formControlName="mail" required>
                                       <mat-icon class="rotate-target" matSuffix>mail</mat-icon>
                                       <mat-error *ngIf="idsFormGroup.controls.mail.invalid">{{getMailErrors()}}</mat-error>
                                   </mat-form-field>
                                   <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent"  [ngSwitch]="showPassword">
                                       <mat-label class="color-accent">Mot de passe</mat-label>
                                       <input matInput [type]="showPassword ? 'text' : 'password'" name="pass" formControlName="pass" required minlength="8">
                                       <mat-icon class="rotate-target" matSuffix *ngSwitchCase="false" (click)="showPassword = !showPassword">visibility</mat-icon>
                                       <mat-icon class="rotate-target" matSuffix *ngSwitchCase="true" (click)="showPassword = !showPassword">visibility_off</mat-icon>
                                       <mat-error *ngIf="idsFormGroup.controls.pass.invalid">{{getPasswordErrors()}}</mat-error>
                                   </mat-form-field>
                                    <div fxLayout="row" fxLayoutAlign="center center">
                                        <button type="button" class="stroked-primary" color="accent" mat-stroked-button matStepperNext [disabled]="idsFormGroup.touched && idsFormGroup.invalid">SUIVANT</button>
                                    </div>
                                </form>
                            </mat-step>
                            <mat-step [stepControl]="userDataFormGroup" optional="true">
                                <ng-template matStepLabel>Informations</ng-template>
                                <form [formGroup]="userDataFormGroup" fxLayout="column" fxLayoutAlign="center">
                                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent" class="field-data">
                                        <mat-label class="color-accent">Genre</mat-label>
                                        <mat-select name="genre" formControlName="genre">
                                            <mat-option value="masculin">
                                                Homme
                                            </mat-option>
                                            <mat-option value="feminin">
                                                Femme
                                            </mat-option>
                                            <mat-option value="autre">
                                                Autre
                                            </mat-option>
                                        </mat-select>
                                        <mat-icon class="rotate-target" matSuffix>wc</mat-icon>
                                        <mat-hint align="start">Facultatif.</mat-hint>
                                    </mat-form-field>
                                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent" class="field-data">
                                        <mat-label class="color-accent">Prénom</mat-label>
                                        <input matInput type="text" name="firstname" formControlName="firstname">
                                        <mat-icon class="rotate-target" matSuffix>text_format</mat-icon>
                                        <mat-hint align="start">Facultatif.</mat-hint>
                                    </mat-form-field>
                                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent" class="field-data">
                                        <mat-label class="color-accent">Nom de famille</mat-label>
                                        <input matInput type="text" name="lastname" formControlName="lastname">
                                        <mat-icon class="rotate-target" matSuffix>badge</mat-icon>
                                        <mat-hint align="start">Facultatif.</mat-hint>
                                    </mat-form-field>
                                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent" class="field-data">
                                        <mat-label class="color-accent">Numéro de téléphone</mat-label>
                                        <span matPrefix>+33</span>
                                        <input matInput type="number" max="999999999" name="phone" formControlName="phone">
                                        <mat-icon class="rotate-target" matSuffix>phone</mat-icon>
                                        <mat-hint align="end">{{userDataFormGroup.controls.phone.value.length}}/9</mat-hint>
                                        <mat-hint align="start">Facultatif.</mat-hint>
                                        <mat-error *ngIf="userDataFormGroup.controls.phone.invalid">{{getPhoneErrors()}}</mat-error>
                                    </mat-form-field>
                                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent" class="field-data">
                                        <mat-label class="color-accent">Date de naissance</mat-label>
                                        <input matInput [matDatepicker]="dp" name="birthdate" formControlName="birthdate" [max]="maxDate" (focus)="dp.open()">
                                        <mat-icon class="rotate-target" matSuffix>cake</mat-icon>
                                        <mat-datepicker touchUi #dp></mat-datepicker>
                                        <mat-hint align="start">Facultatif.</mat-hint>
                                    </mat-form-field>
                                    <div fxLayout="row" fxLayoutAlign="space-between center">
                                        <button fxFlex="30" class="stroked-primary" color="primary" type="button" mat-stroked-button matStepperPrevious>PRECEDENT</button>
                                        <button fxFlex="30" class="stroked-primary" color="accent" type="button" mat-stroked-button matStepperNext>SUIVANT</button>
                                    </div>
                                </form>
                            </mat-step>
                            <mat-step [stepControl]="acceptCguFormGroup">
                                <ng-template matStepLabel>Conditions</ng-template>
                                <form [formGroup]="acceptCguFormGroup" fxLayout="column" fxLayoutAlign="center">
                                    <mat-checkbox name="accept" formControlName="accept" required>
                                        J'accepte les conditions générales d'utilisation.
                                    </mat-checkbox>
                                    <mat-error *ngIf="submitted && acceptCguFormGroup.controls.accept.value === false">{{getAcceptCGUErrors()}}</mat-error>
                                    <div fxLayout="row" fxLayoutAlign="space-between center" id="actions-accept-cgu">
                                        <button fxFlex="30" class="stroked-primary" color="primary" type="button" mat-stroked-button matStepperPrevious>PRECEDENT</button>
                                        <button fxFlex="30" class="stroked-primary" color="accent" type="button" [disabled]="acceptCguFormGroup.controls.accept.touched  && acceptCguFormGroup.controls.accept.invalid" mat-stroked-button (click)="submit()">INSCRIPTION</button>
                                    </div>
                                </form>
                            </mat-step>
                        </mat-horizontal-stepper>
                    </mat-card-content>
                </mat-card>
  `,
    styles: [
        "form { margin-top: 35px; }",
        ".field-data { margin-bottom: 25px; }",
        "#actions-accept-cgu { margin-top: 50px; }"
    ],
    providers: [
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    ],
})
export class SignUpFormComponent implements OnInit {
    idsFormGroup: FormGroup = this.fb.group({
        mail: ['', [Validators.required, Validators.email]],
        pass: ['', [
            Validators.required,
            Validators.minLength(8)
        ]]
    });
    userDataFormGroup: FormGroup = this.fb.group({
        genre: ['', []],
        firstname: ['', []],
        lastname: ['', []],
        phone: ['', [
            Validators.minLength(9),
            Validators.maxLength(9)
        ]],
        birthdate: ['', []]
    });
    acceptCguFormGroup: FormGroup = this.fb.group({
        accept: [false, Validators.requiredTrue]
    });
    submitted: boolean = false;
    showPassword: boolean = false;
    maxDate: Date = new Date();
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(private _adapter: DateAdapter<any>, private fb: FormBuilder, private auth: AuthService, private router: Router, private _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this._adapter.setLocale('fr');
    }

    getMailErrors(): string {
        if (this.idsFormGroup.controls.mail.hasError('required'))
            return 'Obligatoire.';

        if (this.idsFormGroup.controls.mail.hasError('email'))
            return 'Format incorrect.';

        return '';
    }

    getPasswordErrors(): string {
        if (this.idsFormGroup.controls.pass.hasError('required'))
            return 'Obligatoire.';

        if (this.idsFormGroup.controls.pass.hasError('minlength'))
            return '8 charactères minimum.';

        return '';
    }

    getPhoneErrors(): string {
        if (this.userDataFormGroup.controls.phone.hasError('minlength'))
            return '10 charactères numéric minimum.';

        if (this.userDataFormGroup.controls.phone.hasError('maxlength'))
            return '12 charactères numéric maximum.';

        return '';
    }

    getAcceptCGUErrors(): string {
        if (this.acceptCguFormGroup.controls.accept.hasError('required'))
            return 'Obligatoire.';

        return '';
    }

    submit(): void {
        if (this.idsFormGroup.valid && this.userDataFormGroup.valid && this.acceptCguFormGroup.valid) {
            this.auth
                .signup(this.idsFormGroup.value, this.userDataFormGroup.value)
                .subscribe(data => {
                    this._snackBar.open('Création de votre espace personnel effectuée.', 'OK', {
                        duration: 3500,
                        horizontalPosition: this.horizontalPosition,
                        verticalPosition: this.verticalPosition,
                    });

                    this.router.navigateByUrl(this.auth.redirectUrl);
                }, err => {
                    let msg = 'Une erreur inconnue est survenue.';

                    if (err.status === 409)
                        msg = 'Un utilisateur avec ce mail existe déja.';

                    if (err.status === 500)
                        msg = 'Une erreur interne au serveur est survenue.';

                    this._snackBar.open(msg, 'OK', {
                        duration: 3500,
                        horizontalPosition: this.horizontalPosition,
                        verticalPosition: this.verticalPosition,
                    });
                });
        } else this.submitted = true;
    }
}
