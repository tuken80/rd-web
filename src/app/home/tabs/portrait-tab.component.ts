import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-tab-portrait',
    template: `
        <section fxLayout="row" fxLayoutAlign="center top">
            <mat-card fxFlex="98">
                <mat-card-header>
                    <div mat-card-avatar [ngStyle]="madPortraitStyle"></div>
                    <mat-card-title>MAD</mat-card-title>
                    <mat-card-subtitle>Juste moi.</mat-card-subtitle>
                </mat-card-header>
                <img mat-card-image [src]="headerPortraitUrl" alt="Image de forêt">
                <mat-card-content>
                    <p>Bonjour à tous ! Je suis MAD, ou Marie Amélie Donkervolke de mon vrai nom.</p>
                    <p>Je possède de multiples origines ethniques et spirituelles et j'en ai fait ma marque de fabrique. La diversité des gènes dont j'ai ainsi hérité ma permit de me construire, moi et mon tempérement, dans la région des Hauts de France. Je vie en effet dans le nord de la France même si mes envies d'ailleurs se font de plus en plus ressentir.</p>
                </mat-card-content>
                <mat-card-actions fxLayout="row" fxLayoutAlign="space-evenly">
                    <button mat-icon-button color="primary" aria-label="Boutton pour accéder au profil Facebook de MAD" (click)="goToFacebook()">
                        <mat-icon class="rotate">facebook</mat-icon>
                    </button>
                    <button mat-icon-button color="primary" aria-label="Boutton pour accéder au profil Instagram de MAD" (click)="goToInstagram()">
                        <img class="rotate" height="20" width="20" [src]="iconInstagramUrl" alt="Icon Instagram">
                    </button>
                </mat-card-actions> 
            </mat-card>
        </section>
  `,
    styles: [
        "section { margin: 20px; }"
    ]
})
export class PortraitTabComponent {
    headerPortraitUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/header_portrait.png`);
    iconTwitterUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/icon_twitter.png`);
    iconInstagramUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/icon_instagram.png`);
    madPortraitStyle = {
        'background-image': `'url(${environment.apiUrl}/static/images/mad_portrait.jpg)'`,
        'background-size': 'cover'
    };

    constructor(private domSanitizer: DomSanitizer) {}

    goToFacebook(): void {
        window.location.href = "https://www.facebook.com/amely.smith.5";
    }

    goToTwitter(): void {
        window.location.href = "https://www.facebook.com/amely.smith.5";
    }

    goToInstagram(): void {
        window.location.href = "https://www.facebook.com/amely.smith.5";
    }
}
