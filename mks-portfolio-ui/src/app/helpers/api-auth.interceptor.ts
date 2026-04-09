import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      'X-API-Key': `${environment.key}`,
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
  });

  return next(clonedRequest);
}