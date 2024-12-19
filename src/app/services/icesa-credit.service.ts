import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IcesaCreditService {

  private appUrlDev: string = environment.appUrlIcesa;

  constructor(private http: HttpClient) { }

  /**
   * Realiza una solicitud POST al servicio de CresaCredit
   * @param cedula Número de cédula a consultar
   * @returns Un Observable con la respuesta de la API
   */
  async icesaCreditByCi(cedula: string): Promise<Observable<any>> {
    // const endpoint = 'Api_Servi_Cobro_Consulta_Saldos';
    const endpoint = '/api/Api_Servi_Cobro_Consulta_Saldos';


    // const response = this.http.post(`${this.appUrlDev}/${endpoint}`, {"NUM_CEDULA": cedula});
    const response = this.http.post(endpoint, { "NUM_CEDULA": cedula })

    return response;
  }
}
