import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrecosCreditService {
  private apiUrl: string = environment.cresaCredit;

  constructor(private http: HttpClient, private loadingController: LoadingController) { }

  /**
   * Realiza una solicitud POST al servicio de CresaCredit
   * @param endpoint El endpoint al que se enviará la solicitud
   * @param data Los datos a enviar en la solicitud
   * @returns Un Observable con la respuesta de la API
   */
  async crecosCreditByCi(cedula: string): Promise<Observable<any>> {
    const endpoint = '/resources/api/saldos/consultar';

    // Mostrar el loading
    const loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await loading.present();

    // const response = this.http.post(`${this.appUrlDev}/${endpoint}`, {"NUM_CEDULA": cedula});
    const response =this.http.post(endpoint,{"cedula":cedula})

    response.subscribe({
      complete: () => loading.dismiss()
    });

    return response;
  }
}


