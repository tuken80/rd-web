import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private token: (string | null) = null;

    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.token = this.auth.getToken();

        if (this.token !== null) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', this.formatHeader())
            });

            return next.handle(authReq);
        }

        return next.handle(req);
    }

    private formatHeader(): string {
        return `Bearer ${this.token}`;
    }
}