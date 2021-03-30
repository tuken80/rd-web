import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

import {AuthService} from "./session/services/auth.service";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  template: `
    <header>
        <mat-toolbar color="primary" class="mat-elevation-z3">
            <mat-toolbar-row [ngSwitch]="sidenavNav.opened">
                <div class="rotate-listener">
                    <button mat-icon-button aria-label="Boutton pour ouvrir le menu" *ngSwitchCase="true" (click)="sidenavNav.close()">
                        <mat-icon class="color-accent rotate-target">menu_opened</mat-icon>
                    </button>

                    <button mat-icon-button aria-label="Boutton pour fermer le menu" *ngSwitchCase="false" (click)="sidenavNav.open()">
                        <mat-icon class="color-accent rotate-target">menu</mat-icon>
                    </button>

                    <h1 class="color-accent">L'univers <span class="color-light">de</span> <strong>Mad</strong></h1>
                </div>
            </mat-toolbar-row>

            <mat-toolbar-row>
                <h2>Passions & Créations</h2>

                <span class="toolbar-spacer"></span>

                <app-form-search></app-form-search>
            </mat-toolbar-row>
        </mat-toolbar>
    </header>
    
    <mat-sidenav-container class="sidenav-container">
        <mat-sidenav class="mat-elevation-z2 back-light" #sidenavNav mode="side" opened fixedInViewport="true" fixedTopGap="110" fixedBottomGap="50">
            <mat-list>
                <div mat-subheader>Navigation</div>
                <mat-list-item class="rotate-listener" routerLink="/home" routerLinkActive="active">
                    <mat-icon class="rotate-target" mat-list-icon>home</mat-icon>
                    <div mat-line>Accueil</div>
                    <div mat-line>Qui suis je ?</div>
                </mat-list-item>
                <mat-list-item class="rotate-listener" routerLink="/blog" routerLinkActive="active">
                    <mat-icon class="rotate-target" mat-list-icon>forum</mat-icon>
                    <div mat-line>Mon blog</div>
                    <div mat-line>Vous aimez lire ?</div>
                </mat-list-item>
                <mat-list-item class="rotate-listener" routerLink="/boutique" routerLinkActive="active">
                    <mat-icon class="rotate-target" mat-list-icon>book_online</mat-icon>
                    <div mat-line>Mes créations</div>
                    <div mat-line>Vous les voulez ?</div>
                </mat-list-item>
                <mat-divider></mat-divider>
                <div mat-subheader>Demande de contact</div>
                <mat-list-item class="rotate-listener" routerLink="/contacts/form" routerLinkActive="active" *ngIf="user === null || (user !== null && user.role !== 'admin')">
                    <mat-icon class="rotate-target" mat-list-icon>contact_page</mat-icon>
                    <div mat-line>Formulaire</div>
                </mat-list-item>
                <mat-list-item class="rotate-listener" routerLink="/contacts/list" routerLinkActive="active" *ngIf="user !== null && user.role === 'admin'">
                    <mat-icon class="rotate-target" mat-list-icon>view_list</mat-icon>
                    <div mat-line>Afficher les demandes</div>
                </mat-list-item>
                <mat-divider></mat-divider>
                <div mat-subheader>Session</div>
                <mat-list-item class="rotate-listener" routerLink="/session/account" routerLinkActive="active">
                    <mat-icon class="rotate-target" mat-list-icon>face</mat-icon>
                    <div mat-line>Espace personnel</div>
                    <div mat-line *ngIf="user === null">Connexion & Inscription</div>
                    <div mat-line *ngIf="user !== null && user.genre === 'autre'">{{'M.' + ' ' + user.lastname}}</div>
                    <div mat-line *ngIf="user !== null && user.genre === 'masculin'">{{'Mr' + ' ' + user.lastname}}</div>
                    <div mat-line *ngIf="user !== null && user.genre === 'feminin'">{{'Mme' + ' ' + user.lastname}}</div>
                </mat-list-item>
                <mat-list-item class="rotate-listener" *ngIf="user != null" (click)="logout()">
                    <mat-icon class="rotate-target" mat-list-icon>logout</mat-icon>
                    <div mat-line>Déconnexion</div>
                    <div mat-line>Quitter mon espace.</div>
                </mat-list-item>
            </mat-list>
        </mat-sidenav>
        
        <mat-sidenav-content class="back-light">
            <router-outlet></router-outlet>
        </mat-sidenav-content>
    </mat-sidenav-container>
    
    <footer class="mat-elevation-z8">
        <mat-toolbar color="primary">
            <div class="rotate-listener">
                <mat-icon id="copyright-icon" class="color-accent rotate-target" aria-hidden="false" aria-label="Copyright icon">copyright</mat-icon> 
                <span id="current-year-span">2021</span>
            </div>
        </mat-toolbar>
    </footer>
  `,
  styles: [
      "header { position: fixed; top: 0; left: 0; right: 0; }",
      "header, header mat-toolbar { height: 110px; }",
      "header mat-toolbar mat-toolbar-row { height: 55px; }",
      "h1 { font-family: 'Lobster', cursive; position: absolute; top: 12px; left: 100px; }",
      "h1 span { margin-right: 3px; }",
      "h1 strong { font-size: 25px }",
      "app-form-search { margin-bottom: 30px; }",
      "mat-sidenav { display: flex; align-items: center; justify-content: center; width: 300px; }",
      "mat-sidenav-container { position: absolute; top: 110px; bottom: 50px; left: 0; right: 0; }",
      "mat-list { padding: 8px; }",
      "mat-list-item { cursor: pointer; }",
      "footer { position: fixed; bottom: 0; left: 0; right: 0; }",
      "footer, footer mat-toolbar { height: 50px; }",
      "footer mat-toolbar span { margin-left: 20px; }",
      ".toolbar-spacer { flex: 1 1 auto; }"
  ]
})
export class AppComponent implements OnInit {
    user: (User|null) = null;

    constructor(private auth: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.router
            .events
            .subscribe(e => {
                if (e instanceof NavigationEnd && this.auth.isLoggedIn)
                    this.auth.getAuth().subscribe(auth => this.user = auth);
            });
    }

    logout(): void {
        this.auth.signout();
        this.user = null;
        this.router.navigate(['session', 'sign'])
    }
}
