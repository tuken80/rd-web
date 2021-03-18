import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
                        <mat-error *ngIf="formLogin.controls.mail.pristine && formLogin.controls.mail.invalid">{{getMailErrors()}}</mat-error>
                    </mat-form-field>
                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent"  [ngSwitch]="showPassword">
                        <mat-label class="color-accent">{{submitted}}Mot {{formLogin.controls.password.errors !== null}}de passe</mat-label>
                        <input matInput [type]="showPassword ? 'text' : 'password'" formControlName="password" required>
                        <button mat-icon-button aria-label="Icon button to show password" matSuffix *ngSwitchCase="false" (click)="showPassword = !showPassword">
                            <mat-icon class="color-accent rotate-target" aria-hidden="false" aria-label="Showing password icon">visibility</mat-icon>
                        </button>
                        <button mat-icon-button aria-label="Icon button to hide password" matSuffix *ngSwitchCase="true" (click)="showPassword = !showPassword">
                            <mat-icon class="color-accent rotate-target" aria-hidden="false" aria-label="Hidding password icon">visibility_off</mat-icon>
                        </button>
                        <mat-error *ngIf="formLogin.controls.password.pristine && formLogin.controls.password.invalid">{{getPasswordErrors()}}</mat-error>
                    </mat-form-field>
                    <button type="button" mat-button color="primary">Mot de passe oublié</button>
                </mat-card-content> 

                <mat-card-actions fxLayout="row" fxLayoutAlign="center space-evenly">
                    <button type="reset" mat-button color="primary">RESET</button>
                    <button type="submit" mat-button color="accent">SE CONNECTER</button>
                </mat-card-actions>
            </mat-card>
        </form>
  `,
    styles: []
})
export class SignInFormComponent {
    formLogin: FormGroup = this.fb.group({
        mail: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });
    showPassword = false;
    submitted = false;

    constructor(private fb: FormBuilder) {}

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

        if (this.formLogin.controls.password.hasError('required'))
            errors.push('Obligatoire.');

        return errors;
    }

    submit(): void {
        this.submitted = true;
    }
}
