import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseCrecos } from '../interfaces/crecos/response.interface';
import { RequestCrecos } from '../interfaces/crecos/request.interface';

@Injectable({
  providedIn: 'root'
})
export class CrecosCreditService {
  private apiUrl: string = environment.appUrlCrecos;

  constructor(private http: HttpClient) { }

  /**
   * Realiza una solicitud POST al servicio de CresaCredit
   * @param endpoint El endpoint al que se enviará la solicitud
   * @param data Los datos a enviar en la solicitud
   * @returns Un Observable con la respuesta de la API
   */
  async crecosCreditByCi(cedula: string): Promise<Observable<ResponseCrecos>> {
    // const endpoint = 'pago-deuda-unificada/consultardeuda';
    const endpoint = '/CAR_ServicioRecaudoCia01/api/pago-deuda-unificada/consultardeuda';

    const requestPayload: RequestCrecos = {
      "CodigoEmpresa": "000001",
      "UnidadNegocio": "RETAIL",
      "CodigoCliente": 0,
      "IdentificacionCliente": cedula,
      "FechaRecaudo": "2024-12-17",
      "Almacen": "5A",
      "Usuario": "USUARIO",
      "Terminal": "TERMINAL"
    }

    // const response = this.http.post<ResponseCrecos>(`${this.apiUrl}/${endpoint}`,requestPayload);
    const response =this.http.post<ResponseCrecos>(endpoint,requestPayload);

    return response;
  }
}


