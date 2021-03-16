import { Component } from '@angular/core';

@Component({
    selector: 'app-page-account',
    template: `
        <section [hidden]="isAuthConnected()" fxLayout="row" fxLayoutAlign="space-between center">
            <app-form-signin fxFlex="45"></app-form-signin>
            <app-form-signup fxFlex="45"></app-form-signup>
        </section>
    ACCOUNT PAGE
    <app-form-profil></app-form-profil>
    <app-form-settings></app-form-settings>
  `,
    styles: [
        "app-form-signin, app-form-signup { margin: 20px; }"
    ]
})
export class AccountPageComponent {
    isAuthConnected(): boolean {
        return localStorage.getItem('auth') !== null;
    }
}
