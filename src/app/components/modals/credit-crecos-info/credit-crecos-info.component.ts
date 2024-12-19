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
  ) { }

  ngOnInit() {
    console.log(this.data); 
  }


  dismissModal() {
    this.modalController.dismiss();
  }


}
