import { Component } from '@angular/core';

@Component({
    selector: 'app-page-form-contact',
    template: `
        <section>
            <app-contact-header></app-contact-header>
            <h3 class="text-center">Demande de contact</h3>
            <app-form-contact></app-form-contact>            
        </section>
    `,
    styles: [
        "h3 { font-family: 'Lobster', cursive; font-size: 50px; margin-top: 10px; }"
    ]
})
export class ContactFormPageComponent {

}
