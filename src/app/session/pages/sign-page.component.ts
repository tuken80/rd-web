import { Component } from '@angular/core';

@Component({
    selector: 'app-page-account',
    template: `
        <section fxLayout="row" fxLayoutAlign="space-between top">
            <app-form-signin fxFlex="40"></app-form-signin>
            <app-form-signup fxFlex="58"></app-form-signup>
        </section>
  `,
    styles: [
        "app-form-signin, app-form-signup { margin: 20px; }"
    ]
})
export class SignPageComponent {
}
