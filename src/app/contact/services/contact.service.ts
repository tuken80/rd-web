import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Contact } from '../../models/contact';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    gets(): Observable<Contact[]> {
        return this.http.get<Contact[]>(`${environment.apiUrl}/contacts`);
    }

    add(c: Contact): Observable<Contact> {
        return this.http.post<Contact>(`${environment.apiUrl}/contacts`, c, this.httpOptions);
    }
}