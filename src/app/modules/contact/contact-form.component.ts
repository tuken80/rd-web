import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-form-contact',
    template: `
        <form [formGroup]="form" (ngSubmit)="submit()">
            <mat-card class="mat-elevation-z3">
                <mat-card-header>
                    <mat-card-title>FORMULAIRE DE CONTACT</mat-card-title>
                    <mat-card-subtitle></mat-card-subtitle>
                </mat-card-header>
                <mat-card-content fxLayout="column" fxLayoutAlign="center space-around">
                    <div fxLayout="row" fxLayoutAlign="space-between center">
                        <mat-form-field class="rotate-listener" fxFlex="45" appearance="outline" floatLabel="always" color="accent">
                            <mat-label class="color-accent">Adresse mail</mat-label>
                            <input matInput type="email" formControlName="mail" required>
                            <mat-icon class="rotate-target" matSuffix>mail</mat-icon>
                            <mat-error [hidden]="form.controls.mail.pristine">{{getMailError()}}</mat-error>
                        </mat-form-field>
                        <mat-form-field class="rotate-listener" fxFlex="45" appearance="outline" floatLabel="always" color="accent">
                            <mat-label class="color-accent">Numéro de téléphone</mat-label>
                            <input matInput type="tel" minlength="10" maxlength="10" pattern="[0-9]{10}" formControlName="phone" required>
                            <mat-icon class="rotate-target" matSuffix>phone</mat-icon>
                            <mat-error [hidden]="form.controls.phone.pristine">{{getPhoneError()}}</mat-error>
                        </mat-form-field>                        
                    </div>
                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                        <mat-label class="color-accent">Sujet</mat-label>
                        <input matInput type="text" formControlName="subject" maxlength="250" required>
                        <mat-icon class="rotate-target" matSuffix>subject</mat-icon>
                        <mat-hint align="end">{{form.controls.subject.value?.length || 0}}/250</mat-hint>
                        <mat-error [hidden]="form.controls.subject.pristine">{{getSubjectError()}}</mat-error>
                    </mat-form-field>
                    <mat-form-field class="rotate-listener" appearance="outline" floatLabel="always" color="accent">
                        <mat-label class="color-accent">Descriptions</mat-label>
                        <textarea matInput formControlName="descriptions" maxlength="700" required></textarea>
                        <mat-icon class="rotate-target" matSuffix>description</mat-icon>
                        <mat-hint align="end">{{form.controls.descriptions.value?.length || 0}}/700</mat-hint>
                        <mat-error [hidden]="form.controls.descriptions.pristine">{{getDescriptionsError()}}</mat-error>
                    </mat-form-field>
                </mat-card-content>
                <mat-card-actions fxLayout="row" fxLayoutAlign="space-evenly">
                    <button mat-button color="accent" type="reset">RESET</button>
                    <button mat-button color="primary" type="submit">ENVOYER</button>
                </mat-card-actions>
            </mat-card>
        </form>
    `,
    styles: [
        "mat-card { margin-right: 20px; margin-left: 20px; margin-bottom: 20px; }"
    ]
})
export class ContactFormComponent {
    form: FormGroup = this.fb.group({
        mail: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]{10}')]],
        subject: ['', Validators.required],
        descriptions: ['', Validators.required],
    });

    constructor(private fb: FormBuilder) {}

    submit(): void {
        console.log(this.form);
    }

    getMailError(): string[] {
        let errors = [];

        if (this.form.controls.mail.hasError('required'))
            errors.push('Obligatoire.');

        if (this.form.controls.mail.hasError('email'))
            errors.push('Format incorrect.');

        return errors;
    }

    getPhoneError(): string[] {
        let errors = [];

        if (this.form.controls.mail.hasError('required'))
            errors.push('Obligatoire.');

        if (this.form.controls.mail.hasError('minlength'))
            errors.push('10 charactères numéric minimum.');

        if (this.form.controls.mail.hasError('maxlength'))
            errors.push('10 charactères numéric maximum.');

        if (this.form.controls.mail.hasError('pattern'))
            errors.push('Seul format accepté 0699999999.');

        return errors;
    }

    getSubjectError(): string[] {
        let errors = [];

        if (this.form.controls.mail.hasError('required'))
            errors.push('Obligatoire.');

        return errors;
    }

    getDescriptionsError(): string[] {
        let errors = [];

        if (this.form.controls.mail.hasError('required'))
            errors.push('Obligatoire.');

        return errors;
    }
}
