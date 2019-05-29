import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'token-usuario': 'ABCD21321JDSAD2D'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError( this.manejarError )
    );
  }

  manejarError(error: HttpErrorResponse) {
    console.log('sucedio un error');
    console.log('Registrado en el log file');
    console.log(error);
    return throwError('Error personalizado');
  }
}
