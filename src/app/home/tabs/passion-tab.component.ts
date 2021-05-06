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
            <div id="container" fxLayout="row" fxLayoutAlign="space-between">
                <mat-card fxFlex="30">
                    <mat-card-header>
                        <mat-card-title>Le dessin</mat-card-title>
                    </mat-card-header>
                    <img mat-card-image [src]="dessinCardImageUrl" alt="Illustration de dessin">
                    <mat-card-content>
                        <p>Il s'agit la de ma plus grande passion.</p>
                        <p>Travaillant depuis ma plus tendre enfance mes talents de dessinatrice, j'ai acquis des réelles compétences dans ce domaine.</p>
                        <p>J'ai déja réalisé de nombreuses oeuvres et je ne compte pas m'arréter en si bon chemin. Toujours avec un crayon à la main, j'éprouve un plaisir immense à retranscrire sur papier les plus folles imaginations.</p>
                    </mat-card-content>
                </mat-card>
                <mat-card fxFlex="30">
                    <mat-card-header>
                        <mat-card-title>La peinture</mat-card-title>
                    </mat-card-header>
                    <img mat-card-image [src]="peintureCardImageUrl" alt="Illustration de peinture">
                    <mat-card-content>
                        <p>Une passion depuis toujours !</p>
                        <p>J'ai, dans mes plus lointains souvenir, toujours eu l'amour de la peinture.</p>
                        <p>De la pastel à l'aquarelle, en passant même par des bombes aérosols, je décore et personnalise tout ce qui me passe par la main avec tout ce qui me passe par la tête.</p>
                    </mat-card-content>
                </mat-card>
                <mat-card fxFlex="30">
                    <mat-card-header>
                        <mat-card-title>La musique</mat-card-title>
                    </mat-card-header>      
                    <img mat-card-image [src]="musiqueCardImageUrl" alt="Illustration de musique">
                    <mat-card-content>
                        <p>Une passion nouvelle !</p>
                        <p>Au jour d'aujourd'hui la musique prend une nouvelle dimension dans ma vie. Je l'écoute mais plus seulement, car je commence l'apprentissage d'un instrument.</p>
                        <p>Hey oui, j'ai récupéré par l'intermédiaire d'un ami une vieille guitare, qu'il a fallu dans un premier temps nettoyer et restaurer, et avec laquelle je découvre les joies de travailler avec un instrument de musique.</p>
                    </mat-card-content>
                </mat-card>
            </div>
        </section>
  `,
    styles: [
        "#title { font-family: 'Lobster', cursive; font-size: 50px; margin-bottom: 20px; }",
        "header { margin-top: 10px; }",
        "header img { border: 2px solid grey; border-radius: 10px; margin-bottom: 20px; }",
        "#container { margin: 50px; }"
    ]
})
export class PassionTabComponent {
    headerPassionUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/passions_header.png`);
    musiqueCardImageUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/musique.png`);
    peintureCardImageUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/peinture.png`);
    dessinCardImageUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/dessin.png`);

    constructor(private domSanitizer: DomSanitizer) {}
}
