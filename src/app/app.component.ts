import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
        <mat-toolbar color="primary" class="mat-elevation-z3">
            <mat-toolbar-row [ngSwitch]="sidenavNav.opened">
                <button mat-icon-button aria-label="Icon button to open menu" *ngSwitchCase="true" (click)="sidenavNav.close()">
                    <mat-icon class="color-accent rotate" aria-hidden="false" aria-label="Opened menu icon">menu_opened</mat-icon>
                </button>
                    
                <button mat-icon-button aria-label="Icon button to close menu" *ngSwitchCase="false" (click)="sidenavNav.open()">
                    <mat-icon class="color-accent rotate" aria-hidden="false" aria-label="Closed menu icon">menu</mat-icon>
                </button>
                
                <h1 class="color-accent"><strong>Info</strong><span class="color-light">&</span><strong>Co</strong></h1>
            </mat-toolbar-row>

            <mat-toolbar-row>
                <h2>Conception de sites internet et d'applications pour smartphones</h2>

                <span class="toolbar-spacer"></span>

                <app-form-search></app-form-search>
            </mat-toolbar-row>
        </mat-toolbar>
    </header>
    
    <mat-sidenav-container class="sidenav-container">
        <mat-sidenav class="mat-elevation-z2" #sidenavNav mode="side" opened fixedInViewport="true" fixedTopGap="110" fixedBottomGap="50">
            <mat-list>
                <div mat-subheader>Informations about us</div>
                <mat-list-item class="rotate-listener" routerLink="/team" routerLinkActive="active" (mouseenter)="mouseEnter('team')"  (mouseleave)="mouseLeave('team')">
                    <mat-icon class="rotate-target" mat-list-icon>groups</mat-icon>
                    <div mat-line>Our TEAM</div>
                    <div mat-line>Who we are ?</div>
                </mat-list-item>
                <mat-list-item class="rotate-listener" routerLink="/skills" routerLinkActive="active" (mouseenter)="mouseEnter('skills')"  (mouseleave)="mouseLeave('skills')">
                    <mat-icon class="rotate-target" mat-list-icon>engineering</mat-icon>
                    <div mat-line>Our SKILLS</div>
                    <div mat-line>What expertise do we have ?</div>
                </mat-list-item>
                <mat-list-item class="rotate-listener" routerLink="/work" routerLinkActive="active" (mouseenter)="mouseEnter('work')"  (mouseleave)="mouseLeave('work')">
                    <mat-icon class="rotate-target" mat-list-icon>work</mat-icon>
                    <div mat-line>Our WORK</div>
                    <div mat-line>What have we already done ?</div>
                </mat-list-item>
                <mat-divider></mat-divider>
                <div mat-subheader>Your space</div>
                <mat-list-item class="rotate-listener" routerLink="/session/account" routerLinkActive="active" (mouseenter)="mouseEnter('account')"  (mouseleave)="mouseLeave('account')">
                    <mat-icon class="rotate-target" mat-list-icon>face</mat-icon>
                    <div mat-line>Account</div>
                    <div mat-line>Your personnal details.</div>
                </mat-list-item>
                <mat-list-item class="rotate-listener" routerLink="/contact/form" routerLinkActive="active" (mouseenter)="mouseEnter('contact')"  (mouseleave)="mouseLeave('contact')">
                    <mat-icon class="rotate-target" mat-list-icon>contact_page</mat-icon>
                    <div mat-line>Contact</div>
                    <div mat-line>Have any questions ?</div>
                </mat-list-item>
            </mat-list>
        </mat-sidenav>
        
        <mat-sidenav-content>
            <router-outlet></router-outlet>
        </mat-sidenav-content>
    </mat-sidenav-container>
    
    <footer class="mat-elevation-z8">
        <mat-toolbar color="primary">                
            <mat-icon class="color-accent rotate" aria-hidden="false" aria-label="Copyright icon">copyright</mat-icon>
            <span>2021</span>
        </mat-toolbar>
    </footer>
  `,
  styles: [
      "header { position: fixed; top: 0; left: 0; right: 0; }",
      "header, header mat-toolbar { height: 110px; }",
      "header mat-toolbar mat-toolbar-row { height: 55px; }",
      "h1 { position: absolute; top: 12px; left: 100px; }",
      "app-form-search { margin-bottom: 30px; }",
      "mat-sidenav-container { position: absolute; top: 130px; bottom: 50px; left: 0; right: 0; }",
      "mat-sidenav { display: flex; align-items: center; justify-content: center; width: 300px; }",
      "mat-list { padding: 8px; }",
      "mat-list-item { cursor: pointer; }",
      "footer { position: fixed; bottom: 0; left: 0; right: 0; }",
      "footer, footer mat-toolbar { height: 50px; }",
      "footer mat-toolbar mat-icon { margin-left: 5px; }",
      "footer mat-toolbar span { margin-left: 20px; }",
      ".toolbar-spacer { flex: 1 1 auto; }"
  ]
})
export class AppComponent {
    mouseEnter(navItem: string): void {

    }

    mouseLeave(navItem: string): void {

    }
}
