import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

import {User} from "../../models/user";

import { environment } from "../../../environments/environment";

export interface JwtResponse {
    token: string;
    role: string;
}

export interface IdsUser {
    mail: string;
    pass: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLoggedIn = false;
    redirectUrl: string = '/home';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) {}

    getAuth(): Observable<User> {
        return this.http.get<User>(`${environment.apiUrl}/session/auth`, this.httpOptions);
    }

    getToken(): (string|null) {
        return localStorage.getItem('token');
    }

    getRole(): (string|null) {
        return localStorage.getItem('role');
    }

    signin(ids: IdsUser): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(`${environment.apiUrl}/session/signin`, ids, this.httpOptions).pipe(
            tap((res: JwtResponse) => {
                if (res.token) {
                    this.loggedIn(res);
                } else {
                    this.loggedOut();
                }
            } )
        );
    }

    signup(ids: IdsUser, data: User): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(`${environment.apiUrl}/session/signup`, { ids: ids, data: data }, this.httpOptions).pipe(
            tap((res: JwtResponse) => {
                if (res.token) {
                    this.loggedIn(res);
                } else {
                    this.loggedOut();
                }
            } )
        );
    }

    signout(): void {
        this.loggedOut();
    }

    private loggedIn(res: JwtResponse): void {
        this.isLoggedIn = true;
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
    }

    private loggedOut(): void {
        this.isLoggedIn = false;
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }
}