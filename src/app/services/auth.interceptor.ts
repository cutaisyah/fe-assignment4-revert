import { UserService } from 'src/app/services/user.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { TokenService } from './token.service';
import { Observable, throwError } from 'rxjs';

const TOKEN_HEADER_KEY = 'access_token';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService {
  constructor(private tokenService: TokenService) {}
  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.tokenService.getToken();
    let authRequest = authToken ? req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, authToken)}) : req;
    return next.handle(authRequest);
  }
}

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if ([401, 403].indexOf(err.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this.userService.logout();
          window.location.reload();
        }

        const error = err.error || err.statusText;
        return throwError(error);
      })
    );
  }
}
