import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-credit-crecos-info',
  templateUrl: './credit-crecos-info.component.html',
  styleUrls: ['./credit-crecos-info.component.scss'],
})
export class CreditCrecosInfoComponent  implements OnInit {
  @Input() data: any;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    console.log(this.data); 
  }

  async showCreditDetails() {
    const alert = await this.alertController.create({
      header: `Informacion Credito ${this.data.data.secuencia}`,
      subHeader: `Fecha de pago : ${this.data.data.FechaPago}`,
      message: `Pago Minimo : ${this.data.data.PagoMinimo}`,
      buttons: ['OK']
    });
    await alert.present();
  } 

  dismissModal() {
    this.modalController.dismiss();
  }


}
