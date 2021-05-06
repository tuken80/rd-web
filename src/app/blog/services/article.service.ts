import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Contact } from '../../models/contact';

import { environment } from '../../../environments/environment';
import {Article} from "../../models/article";

@Injectable({ providedIn: 'root' })
export class ArticleService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    gets(): Observable<Article[]> {
        return this.http.get<Article[]>(`${environment.apiUrl}/blog/articles`);
    }

    add(c: Contact): Observable<Article> {
        return this.http.post<Article>(`${environment.apiUrl}/blog/article`, c, this.httpOptions);
    }
}