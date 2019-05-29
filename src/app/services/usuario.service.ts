import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  obtenerUsuario( ) {
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Marco Lopz');

    return this.http.get(`https://reqres.in/api/user`, { params }).pipe(
      map( resp =>  resp['data'] )
    )
  }

}
