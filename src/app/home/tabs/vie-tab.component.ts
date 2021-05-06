import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-tab-vie',
    template: `
        <section>
            <header role="banner" fxLayout="row" fxLayoutAlign="center top">
                <img fxFlex="40" [src]="headerVieUrl" alt="Image d'une boutique de vêtements">
            </header>
            <div id="title-timeline" class="text-center">Mes évènements marquants</div>
            <div id="timeline-container">
                <mzd-timeline>
                    <mzd-timeline-content [border]="true" class="rotate-listener">
                        <mzd-icon fxLayout="row" fxLayoutAlign="center center">
                            <mat-icon class="rotate-target">cake</mat-icon>
                        </mzd-icon>
                        Le 30 décembre 1998, il s'agit du jour ou ma mère ma mise au monde.
                    </mzd-timeline-content>
                    <mzd-timeline-content [border]="true" class="rotate-listener">
                        <mzd-icon fxLayout="row" fxLayoutAlign="center">    
                            <mat-icon class="rotate-target">location_city</mat-icon>
                        </mzd-icon>
                        Je découvre la ville d'Amiens en Août 2014, c'est le départ du domicile parental et donc le commencement de mon indépendance.
                    </mzd-timeline-content>
                    <mzd-timeline-content [border]="true" class="rotate-listener">
                        <mzd-icon fxLayout="row" fxLayoutAlign="center">
                            <mat-icon class="rotate-target">school</mat-icon>
                        </mzd-icon>
                        Septembre 2014 ou le mois qui marque mon entrée à l'université de Picardie Jules Verne.
                    </mzd-timeline-content>
                    <mzd-timeline-content [border]="true" class="rotate-listener">
                        <mzd-icon fxLayout="row" fxLayoutAlign="center">
                            <mat-icon class="rotate-target">work</mat-icon>
                        </mzd-icon>
                        C'est durant ce mois d'Avril 2014 que j'ai découvert le monde du travail.
                    </mzd-timeline-content>
                    <mzd-timeline-content [border]="true" class="rotate-listener">
                        <mzd-icon fxLayout="row" fxLayoutAlign="center">
                            <mat-icon class="rotate-target">history_edu</mat-icon>
                        </mzd-icon>
                        Les résultats dont tombés ! L'année 2021 est celle de l'obtention de ma license de sociologie, souhaitant faire de l'étude ethnique des peuples mon métier.
                    </mzd-timeline-content>
                </mzd-timeline>
            </div>
        </section>
          `,
    styles: [
        "#title-timeline { font-family: 'Lobster', cursive; font-size: 50px; margin-bottom: 20px; }",
        "#timeline-container { margin: 30px; }",
        "header { margin-top: 10px; }",
        "img { border: 2px solid grey; border-radius: 10px; margin-bottom: 20px; }"
    ]
})
export class VieTabComponent {
    headerVieUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/static/images/vie_header.png`);

    constructor(private domSanitizer: DomSanitizer) {}
}
