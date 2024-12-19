import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { CreditCrecosInfoComponent } from 'src/app/components/modals/credit-crecos-info/credit-crecos-info.component';
import { CrecosCreditService } from 'src/app/services/crecos-credit.service';

@Component({
  selector: 'app-crecos',
  templateUrl: './crecos.page.html',
  styleUrls: ['./crecos.page.scss'],
})
export class CrecosPage implements OnInit {

  constructor(
    private crecosCreditService: CrecosCreditService,
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

    (await this.crecosCreditService.crecosCreditByCi(cedula)).subscribe({
      next:async(response)=>{
        const modal = await this.modalController.create({
          component: CreditCrecosInfoComponent,
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
