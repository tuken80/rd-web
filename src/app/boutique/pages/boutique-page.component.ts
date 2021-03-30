import { Component } from '@angular/core';

@Component({
    selector: 'app-page-boutique',
    template: `
        <app-boutique-header></app-boutique-header>
        <h3 class="text-center">Boutique</h3>
    `,
    styles: [
        "h3 { font-family: 'Lobster', cursive; font-size: 50px; margin-top: 10px; }"
    ]
})
export class BoutiquePageComponent {}
