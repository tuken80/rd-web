import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

import { environment} from "../../../environments/environment";

@Component({
    selector: 'app-blog-header',
    template: `
            <header role="banner" fxLayout="row" fxLayoutAlign="center top">
                <img fxFlex="40" [src]="headerBlogUrl" alt="Image d'une boutique de vêtements">
            </header>
    `,
    styles: [
        "header { margin-top: 10px; }",
        "img { border: 2px solid grey; border-radius: 10px; }"
    ]
})
export class BlogHeaderComponent {
    headerBlogUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/blog_header.png`);

    constructor(private domSanitizer: DomSanitizer) {}

}
