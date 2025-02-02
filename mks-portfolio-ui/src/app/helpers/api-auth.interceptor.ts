import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = req.clone({
      setHeaders: {
        'X-API-Key': `${environment.key}`,
        'Content-Type': 'application/json',
        accept: '*/*',
      },
    });

    return next.handle(clonedRequest);
  }
}
