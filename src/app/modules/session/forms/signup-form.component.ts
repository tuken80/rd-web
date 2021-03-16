import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-form-signup',
    template: `
        <form [formGroup]="form" (ngSubmit)="submit()">
            <mat-card class="mat-elevation-z3">
                <mat-card-header>
                    <mat-card-title>Inscription</mat-card-title>
                </mat-card-header>

                <mat-card-content fxLayout="column" fxLayoutAlign="center">
                    <mat-horizontal-stepper linear #stepper>    
                        <mat-step [stepControl]="firstFormGroup">
<!--

                            <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                                <mat-label class="color-accent">Adresse mail</mat-label>
                                <input matInput type="email" formControlName="mail" required>
                                <mat-icon class="rotate-target" matSuffix>mail</mat-icon>
                                <mat-error [hidden]="form.controls.mail.pristine">{{getMailErrors()}}</mat-error>
                            </mat-form-field>
                            <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent"  [ngSwitch]="showPassword">
                                <mat-label class="color-accent">Mot de passe</mat-label>
                                <input matInput [type]="showPassword ? 'text' : 'password'" formControlName="password" required>
                                <mat-icon class="rotate-target" matSuffix *ngSwitchCase="false" (click)="showPassword = !showPassword">visibility</mat-icon>
                                <mat-icon class="rotate-target" matSuffix *ngSwitchCase="true" (click)="showPassword = !showPassword">visibility_off</mat-icon>
                                <mat-error [hidden]="form.controls.password.pristine">{{getPasswordErrors()}}</mat-error>
                            </mat-form-field>

-->

                            <form [formGroup]="idsFormGroup">
                                <ng-template matStepLabel>Fill out your name</ng-template>
                                <mat-form-field>
                                    <mat-label>Name</mat-label>
                                    <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
                                </mat-form-field>
                                <div>
                                    <button mat-button matStepperNext>Next</button>
                                </div>
                            </form>
                        </mat-step>
                        <mat-step [stepControl]="secondFormGroup" [optional]="isOptional">
                            <form [formGroup]="secondFormGroup">
                                <ng-template matStepLabel>Fill out your address</ng-template>
                                <mat-form-field>
                                    <mat-label>Address</mat-label>
                                    <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
                                           required>
                                </mat-form-field>
                                <div>
                                    <button mat-button matStepperPrevious>Back</button>
                                    <button mat-button matStepperNext>Next</button>
                                </div>
                            </form>
                        </mat-step>
                        <mat-step>
                            <ng-template matStepLabel>Done</ng-template>
                            <p>You are now done.</p>
                            <div>
                                <button mat-button matStepperPrevious>Back</button>
                                <button mat-button (click)="stepper.reset()">Reset</button>
                            </div>
                        </mat-step>
                    </mat-horizontal-stepper>
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
export class SignUpFormComponent {
    idsFormGroup: FormGroup = this.fb.group({
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
