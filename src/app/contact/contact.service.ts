import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contact } from '../model/entities/contact';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
    private contactsUrl = `${environment.api}/contacts`;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    gets(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.contactsUrl);
    }

    getNo404<Data>(id: number): Observable<Contact> {
        const url = `${this.contactsUrl}/?id=${id}`;
        return this.http.get<Contact[]>(url)
            .pipe(
                map(heroes => heroes[0])
            );
    }

    get(id: number): Observable<Contact> {
        const url = `${this.contactsUrl}/${id}`;

        return this.http.get<Contact>(url);
    }

    searchs(term: string): Observable<Contact[]> {
        if (!term.trim()) {
            return of([]);
        }

        return this.http.get<Contact[]>(`${this.contactsUrl}/?mail=${term}`);
    }

    add(hero: Contact): Observable<Contact> {
        return this.http.post<Contact>(this.contactsUrl, hero, this.httpOptions);
    }

    del(contact: Contact | number): Observable<Contact> {
        const id = typeof contact === 'number' ? contact : contact.id;
        const url = `${this.contactsUrl}/${id}`;

        return this.http.delete<Contact>(url, this.httpOptions);
    }

    up(contact: Contact): Observable<any> {
        return this.http.put(this.contactsUrl, contact, this.httpOptions);
    }
}