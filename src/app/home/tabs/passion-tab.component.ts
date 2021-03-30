import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-tab-passion',
    template: `
        <section>
            <header role="banner" fxLayout="row" fxLayoutAlign="center top">
                <img fxFlex="40" [src]="headerPassionUrl" alt="Image d'une boutique de vêtements">
            </header>
            <div id="title" class="text-center">Qu'est-ce que j'aime ?</div>
        </section>
  `,
    styles: [
        "#title { font-family: 'Lobster', cursive; font-size: 50px; margin-bottom: 20px; }",
        "header { margin-top: 10px; }",
        "img { border: 2px solid grey; border-radius: 10px; margin-bottom: 20px; }"
    ]
})
export class PassionTabComponent {
    headerPassionUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/passions_header.png`);

    constructor(private domSanitizer: DomSanitizer) {}
}
