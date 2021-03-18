import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
                               <form [formGroup]="idsFormGroup" fxLayout="column" fxLayoutAlign="center">
                                <ng-template matStepLabel>Identifiants</ng-template>
                               <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                                   <mat-label class="color-accent">Adresse mail</mat-label>
                                   <input matInput type="email" formControlName="mail" required>
                                   <mat-icon class="rotate-target" matSuffix>mail</mat-icon>
                                   <mat-error [hidden]="idsFormGroup.controls.mail.pristine">{{getMailErrors()}}</mat-error>
                               </mat-form-field>
                               <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent"  [ngSwitch]="showPassword">
                                   <mat-label class="color-accent">Mot de passe</mat-label>
                                   <input matInput [type]="showPassword ? 'text' : 'password'" formControlName="password" required>
                                   <mat-icon class="rotate-target" matSuffix *ngSwitchCase="false" (click)="showPassword = !showPassword">visibility</mat-icon>
                                   <mat-icon class="rotate-target" matSuffix *ngSwitchCase="true" (click)="showPassword = !showPassword">visibility_off</mat-icon>
                                   <mat-error [hidden]="idsFormGroup.controls.password.pristine">{{getPasswordErrors()}}</mat-error>
                               </mat-form-field>
                               <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent" [ngSwitch]="showConfirmPassword">
                                   <mat-label class="color-accent">Confirmation du mot de passe</mat-label>
                                   <input matInput [type]="showConfirmPassword ? 'text' : 'password'" formControlName="confirmPassword" required>
                                   <mat-icon class="rotate-target" matSuffix *ngSwitchCase="false" (click)="showConfirmPassword = !showConfirmPassword">visibility</mat-icon>
                                   <mat-icon class="rotate-target" matSuffix *ngSwitchCase="true" (click)="showConfirmPassword = !showConfirmPassword">visibility_off</mat-icon>
                                   <mat-error [hidden]="idsFormGroup.controls.confirmPassword.pristine">{{getConfirmPasswordErrors()}}</mat-error>
                               </mat-form-field>
                                <div fxLayout="row" fxLayoutAlign="center space-evenly">
                                    <button type="reset" color="primary" mat-button>RESET</button>
                                    <button type="button" color="accent" mat-button matStepperNext>SUIVANT</button>
                                </div>
                            </form>
                        </mat-step>
                        <mat-step [stepControl]="userDataFormGroup" optional="true">
                            <form [formGroup]="userDataFormGroup" fxLayout="column" fxLayoutAlign="center">
                                <ng-template matStepLabel>Informations</ng-template>
                                <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                                    <mat-label class="color-accent">Prénom</mat-label>
                                    <input matInput type="text" formControlName="firstname" required>
                                    <mat-icon class="rotate-target" matSuffix>mail</mat-icon>
                                    <mat-error [hidden]="userDataFormGroup.controls.firstname.pristine">{{getMailErrors()}}</mat-error>
                                </mat-form-field>
                                <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                                    <mat-label class="color-accent">Nom de famille</mat-label>
                                    <input matInput type="text" formControlName="lastname" required>
                                    <mat-icon class="rotate-target" matSuffix>mail</mat-icon>
                                    <mat-error [hidden]="userDataFormGroup.controls.lastname.pristine">{{getMailErrors()}}</mat-error>
                                </mat-form-field>
                                <div fxLayout="row" fxLayoutAlign="center space-evenly">
                                    <button fxFlex="30" color="primary" type="button" mat-button matStepperPrevious>PRECEDENT</button>
                                    <button fxFlex="30" color="primary" type="reset" mat-button>RESET</button>
                                    <button fxFlex="30" color="accent" type="button" mat-button matStepperNext>SUIVANT</button>
                                </div>
                            </form>
                        </mat-step>
                        <mat-step [stepControl]="cguFormGroup" optional="true">
                            <form [formGroup]="cguFormGroup" fxLayout="column" fxLayoutAlign="center">
                                <ng-template matStepLabel>Conditions générales</ng-template>
                                <mat-checkbox formControlName="accept" required>
                                    J'accepte les conditions générales d'utilisation.
                                </mat-checkbox>
                                <div fxLayout="row" fxLayoutAlign="center space-evenly">
                                    <button fxFlex="30" color="primary" type="button" mat-button matStepperPrevious>PRECEDENT</button>
                                    <button fxFlex="30" color="primary" type="reset" mat-button>RESET</button>
                                    <button fxFlex="30" color="accent" type="submit" mat-button matStepperNext>INSCRIPTION</button>
                                </div>
                            </form>
                        </mat-step>
                    </mat-horizontal-stepper>
                </mat-card-content>
            </mat-card>
  `,
    styles: [
        "mat-checkbox { margin: 0 10px; }"
    ]
})
export class SignUpFormComponent {
    idsFormGroup: FormGroup = this.fb.group({
        mail: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    });
    userDataFormGroup: FormGroup = this.fb.group({
        firstname: ['', []],
        lastname: ['', []]
    });
    cguFormGroup: FormGroup = this.fb.group({
        accept: [false, Validators.requiredTrue]
    });
    showPassword = false;
    showConfirmPassword = false;

    constructor(private fb: FormBuilder) {}

    getMailErrors(): string[] {
        let errors = [];

        if (this.idsFormGroup.controls.mail.hasError('required'))
            errors.push('Obligatoire.');

        if (this.idsFormGroup.controls.mail.hasError('email'))
            errors.push('Format incorrect.');

        return errors;
    }

    getPasswordErrors(): string[] {
        let errors = [];

        if (this.idsFormGroup.controls.password.hasError('required'))
            errors.push('Obligatoire.');

        return errors;
    }

    getConfirmPasswordErrors(): string[] {
        let errors = [];

        if (this.idsFormGroup.controls.confirmPassword.hasError('required'))
            errors.push('Obligatoire.');

        return errors;
    }


    getAcceptCGUErrors(): string[] {
        let errors = [];

        if (this.idsFormGroup.controls.confirmPassword.hasError('required'))
            errors.push('Obligatoire.');

        return errors;
    }

    submit(): void {

    }
}
