import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-credit-info',
  templateUrl: './credit-info.component.html',
  styleUrls: ['./credit-info.component.scss'],
})
export class CreditInfoComponent  implements OnInit {
  @Input() data: any;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    console.log(this.data);
    
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async showCreditDetails(credit: any) {
    const alert = await this.alertController.create({
      header: 'Detalles del Crédito',
      subHeader: `Estado: ${credit.status}`,
      message: `
        <p><strong>Monto:</strong> ${credit.amount.toLocaleString('es-EC', { style: 'currency', currency: 'USD' })}</p>
        <p><strong>Tasa de Interés:</strong> ${credit.interestRate}%</p>
        <p><strong>Inicio:</strong> ${new Date(credit.startDate).toLocaleDateString()}</p>
        <p><strong>Fin:</strong> ${new Date(credit.endDate).toLocaleDateString()}</p>
        <p><strong>Descripción:</strong> ${credit.description}</p>
      `,
      buttons: ['Cerrar'],
    });

    await alert.present();
  } 
}
