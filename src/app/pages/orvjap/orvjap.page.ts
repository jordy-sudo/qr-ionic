import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { CreditIcesaInfoComponent } from 'src/app/components/modals/credit-icesa-info/credit-icesa-info.component';
import { IcesaCreditService } from 'src/app/services/icesa-credit.service';


@Component({
  selector: 'app-orvjap',
  templateUrl: './orvjap.page.html',
  styleUrls: ['./orvjap.page.scss'],
})
export class OrvjapPage implements OnInit {

  constructor(
    private icesaCreditService: IcesaCreditService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onSubmit = async (data: FormControl) => {
    const cedula = data.value.cedula;

    const loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await loading.present();

    (await this.icesaCreditService.icesaCreditByCi(cedula)).subscribe({
      next:async(response)=>{
        const modal = await this.modalController.create({
          component: CreditIcesaInfoComponent,
          componentProps: { data: response },
        });
        await modal.present();
        loading.dismiss();
      },
      error:(err)=>{
        console.log('Error', err);
        this.showAlert('Error','Ocurrio un error Vuelve a intentarlo');
        loading.dismiss();
      }
    })
  };


  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
