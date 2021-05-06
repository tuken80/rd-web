import { Component } from '@angular/core';

@Component({
    selector: 'app-page-blog',
    template: `
        <section fxLayout="column">
            <app-blog-header></app-blog-header>
            <h3 class="text-center">Blog</h3>
            <app-blog-list></app-blog-list>
        </section>
    `,
    styles: [
        "h3 { font-family: 'Lobster', cursive; font-size: 50px; margin-top: 10px; }",
        "app-blog-list { margin: 50px; }"
    ]
})
export class BlogPageComponent {}
