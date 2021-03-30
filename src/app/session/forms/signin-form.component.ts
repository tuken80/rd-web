import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'app-form-signin',
    template: `
        <form [formGroup]="formLogin" (ngSubmit)="submit()">
            <mat-card class="mat-elevation-z3">
                <mat-card-header fxLayout="row" fxLayoutAlign="center center">
                    <mat-card-title>Connexion</mat-card-title>
                </mat-card-header>

                <mat-card-content fxLayout="column" fxLayoutAlign="center">
                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                        <mat-label class="color-accent">Adresse mail</mat-label>
                        <input matInput type="email" formControlName="mail" required>
                        <mat-icon class="rotate-target" matSuffix>mail</mat-icon>
                        <mat-error *ngIf="formLogin.controls.mail.invalid">{{getMailErrors()}}</mat-error>
                    </mat-form-field>
                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent"  [ngSwitch]="showPassword">
                        <mat-label class="color-accent">Mot de passe</mat-label>
                        <input matInput [type]="showPassword ? 'text' : 'password'" formControlName="pass" required>
                        <button mat-icon-button aria-label="Icon button to show password" matSuffix *ngSwitchCase="false" (click)="showPassword = !showPassword">
                            <mat-icon class="rotate-target" aria-hidden="false" aria-label="Showing password icon">visibility</mat-icon>
                        </button>
                        <button mat-icon-button aria-label="Icon button to hide password" matSuffix *ngSwitchCase="true" (click)="showPassword = !showPassword">
                            <mat-icon class="rotate-target" aria-hidden="false" aria-label="Hidding password icon">visibility_off</mat-icon>
                        </button>
                        <mat-error *ngIf="formLogin.controls.pass.invalid">{{getPasswordErrors()}}</mat-error>
                    </mat-form-field>
                    <button type="button" mat-stroked-button color="primary">Mot de passe oublié</button>
                </mat-card-content> 

                <mat-card-actions fxLayout="row" fxLayoutAlign="center center">
                    <button type="submit" class="stroked-primary" mat-stroked-button color="accent" [disabled]="formLogin.touched && formLogin.invalid">SE CONNECTER</button>
                </mat-card-actions>
            </mat-card>
        </form>
  `,
    styles: [
        "mat-card-content { padding: 35px; }"
    ]
})
export class SignInFormComponent {
    formLogin: FormGroup = this.fb.group({
        mail: ['', [Validators.required, Validators.email]],
        pass: ['', Validators.required]
    });
    showPassword = false;
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(private fb: FormBuilder, private router: Router, private auth: AuthService, private _snackBar: MatSnackBar) {}

    getMailErrors(): string[] {
        let errors = [];

        if (this.formLogin.controls.mail.hasError('required'))
            errors.push('Obligatoire.');

        if (this.formLogin.controls.mail.hasError('email'))
            errors.push('Format incorrect.');

        return errors;
    }

    getPasswordErrors(): string[] {
        let errors = [];

        if (this.formLogin.controls.pass.hasError('required'))
            errors.push('Obligatoire.');

        return errors;
    }

    submit(): void {
        if (this.formLogin.valid) {
            this.auth
                .signin(this.formLogin.value)
                .subscribe(data => {
                    this._snackBar.open('Connexion effectuée.', 'OK', {
                        duration: 3500,
                        horizontalPosition: this.horizontalPosition,
                        verticalPosition: this.verticalPosition,
                    });

                    this.router.navigateByUrl(this.auth.redirectUrl);
                }, err => {
                    let msg = 'Une erreur inconnue est survenue.';

                    if (err.status === 404)
                        msg = 'Adresse mail inconnue.';

                    if (err.status === 401)
                        msg = 'Echec de la connexion.';

                    if (err.status === 500)
                        msg = 'Une erreur interne au serveur est survenue.';

                    this._snackBar.open(msg, 'OK', {
                        duration: 3500,
                        horizontalPosition: this.horizontalPosition,
                        verticalPosition: this.verticalPosition,
                    });
                });
        }
    }
}
