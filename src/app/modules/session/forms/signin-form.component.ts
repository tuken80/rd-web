import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-form-signin',
    template: `
        <form [formGroup]="form" (ngSubmit)="submit()">
            <mat-card class="mat-elevation-z3">
                <mat-card-header>
                    <mat-card-title>Connexion</mat-card-title>
                </mat-card-header>

                <mat-card-content fxLayout="column" fxLayoutAlign="center">
                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                        <mat-label class="color-accent">Adresse mail</mat-label>
                        <input matInput type="email" formControlName="mail" required>
                        <mat-icon class="rotate-target" matSuffix>mail</mat-icon>
                        <mat-error [hidden]="!form.controls.mail.dirty">{{getMailErrors()}}</mat-error>
                    </mat-form-field>
                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent"  [ngSwitch]="showPassword">
                        <mat-label class="color-accent">Mot de passe</mat-label>
                        <input matInput [type]="showPassword ? 'text' : 'password'" formControlName="password" required>
                        <mat-icon class="rotate-target" matSuffix *ngSwitchCase="false" (click)="showPassword = !showPassword">visibility</mat-icon>
                        <mat-icon class="rotate-target" matSuffix *ngSwitchCase="true" (click)="showPassword = !showPassword">visibility_off</mat-icon>
                        <mat-error [hidden]="!form.controls.password.dirty">{{getPasswordErrors()}}</mat-error>
                    </mat-form-field>
                </mat-card-content>

                <mat-card-actions fxLayout="row" fxLayoutAlign="center space-evenly">
                    <button fxFlex="30" mat-button color="accent" type="reset">RESET</button>
                    <button fxFlex="30" mat-button color="primary" type="submit">ENVOYER</button>
                </mat-card-actions>
            </mat-card>
        </form>
  `,
    styles: []
})
export class SignInFormComponent {
    form: FormGroup = this.fb.group({
        mail: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });
    showPassword = false;

    constructor(private fb: FormBuilder) {}

    getMailErrors(): string[] {
        let errors = [];

        if (this.form.controls.mail.hasError('required'))
            errors.push('Obligatoire.');

        if (this.form.controls.mail.hasError('email'))
            errors.push('Format incorrect.');

        return errors;
    }

    getPasswordErrors(): string[] {
        let errors = [];

        if (this.form.controls.password.hasError('required'))
            errors.push('Obligatoire.');

        return errors;
    }

    submit(): void {

    }
}
