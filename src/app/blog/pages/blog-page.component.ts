import { Component } from '@angular/core';

@Component({
    selector: 'app-page-blog',
    template: `
        <app-blog-header></app-blog-header>
        <h3 class="text-center">Blog</h3>
    `,
    styles: [
        "h3 { font-family: 'Lobster', cursive; font-size: 50px; margin-top: 10px; }"
    ]
})
export class BlogPageComponent {}
