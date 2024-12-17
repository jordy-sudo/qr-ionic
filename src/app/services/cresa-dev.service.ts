import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CresaDevService {
  private appUrlDev: string = environment.appUrlDev;

  constructor(private http: HttpClient) { }

  /**
   * Realiza una solicitud POST al servicio de CresaCredit
   * @param endpoint El endpoint al que se enviará la solicitud
   * @param data Los datos a enviar en la solicitud
   * @returns Un Observable con la respuesta de la API
   */
  cresaCreditByCi(cedula: string): Observable<any> {
    const endpoint = 'clients';

    // Realizar la solicitud HTTP POST
    return this.http.get(`${this.appUrlDev}/${endpoint}/${cedula}`);
  }
}
