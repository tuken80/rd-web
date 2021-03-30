import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {User} from "../../models/user";

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private auth: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkAdmin();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        return this.checkAdmin();
    }

    checkAdmin(): boolean {
        if (this.auth.isLoggedIn && this.auth.getRole() === 'admin') {
            return true;
        }

        this.router.navigate(['errors', '401']);
        return false;
    }
}
