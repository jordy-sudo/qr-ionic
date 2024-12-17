import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController, LoadingController } from '@ionic/angular'; // Importar LoadingController
import { CreditInfoComponent } from '../components/modals/credit-info/credit-info.component';
import { CresaDevService } from '../services/cresa-dev.service';
import { IcesaCreditService } from '../services/icesa-credit.service';
import { CrecosCreditService } from '../services/crecos-credit.service';
import { CreditIcesaInfoComponent } from '../components/modals/credit-icesa-info/credit-icesa-info.component';
import { CreditCrecosInfoComponent } from '../components/modals/credit-crecos-info/credit-crecos-info.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public unidadNegocio!: string;
  private activatedRoute = inject(ActivatedRoute);
  
  formCredito = new FormGroup({
    cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^[0-9]*$'),]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$'),]),
  });

  constructor(
    private cresaCreditService: CresaDevService,
    private crecosCreditService: CrecosCreditService,
    private icesaCreditService: IcesaCreditService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.unidadNegocio = params['unidadNegocio']; // Obtiene el parámetro 'unidadNegocio'
      console.log('Unidad Negocio:', this.unidadNegocio);  // Puedes verificar el valor del parámetro aquí
    });
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async onSubmit() {
    try {
      const cedula = this.formCredito.value.cedula ? this.formCredito.value.cedula : '';
      if (cedula) {


        this.getServiceByUnidadNegocio(this.unidadNegocio, cedula)
          .then((data) => {
            this.openModal(data, this.unidadNegocio);
          })
          .catch((err) => {
            console.error('Error:', err);
          });
      } else {
        console.error('Cedula is required');
      }
    } catch (error) {
      console.error('Unexpected error occurred:', error);
    }
  }

  isValidData(data: any): boolean {
    if (!data || !data.CupoDisponible || !data.FechaPago || !data.PagoMinimo) {
      return false;
    }
    return true;
  }

  async openModal(data: any, unidadNegocio: string) {
    let modalComponent: any;

    if (unidadNegocio === 'icesa') {
      modalComponent = CreditIcesaInfoComponent;
    } else if (unidadNegocio === 'crecos') {
      modalComponent = CreditCrecosInfoComponent;
    } else {
      modalComponent = CreditInfoComponent;
    }

    const modal = await this.modalController.create({
      component: modalComponent,
      componentProps: { data: data },
    });

    await modal.present();
  }

  getFirstErrorMessage(errors: any, input: string): string {
    if (errors?.['required']) {
      return `La ${input} es obligatoria`;
    }
    if (errors?.['minlength']) {
      return `La ${input} debe tener al menos 10 caracteres`;
    }
    if (errors?.['maxlength']) {
      return `La ${input} debe tener como máximo 13 caracteres`;
    }
    if (errors?.['pattern']) {
      return `La ${input} solo puede contener números`;
    }
    return '';
  }

  // Método asincrónico para obtener el servicio según la unidad de negocio y cédula
  async getServiceByUnidadNegocio(unidad: string, cedula: string): Promise<any> {
    let serviceObservable: any;

    switch (unidad) {
      case 'cresa':
        serviceObservable = this.cresaCreditService.cresaCreditByCi(cedula);
        break;
      case 'icesa':
        serviceObservable = await this.icesaCreditService.icesaCreditByCi(cedula);
        break;
      case 'crecos':
        serviceObservable = await this.crecosCreditService.crecosCreditByCi(cedula);
        break;
      default:
        throw new Error(`Unidad de negocio no reconocida: ${unidad}`);
    }

    try {
      const response = await serviceObservable.toPromise(); // Convertimos el Observable en una Promesa
      if (response && response.data) {
        return response; // Devuelve la respuesta si los datos están presentes
      } else {
        console.error('No data received:', response);
        return null; // Si no hay datos
      }
    } catch (error) {
      console.error('Error fetching credit balance:', error);
      throw new Error('Error fetching credit balance');
    }
  }
}
