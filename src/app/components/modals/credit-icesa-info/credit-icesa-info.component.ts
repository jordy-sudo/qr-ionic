import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-credit-icesa-info',
  templateUrl: './credit-icesa-info.component.html',
  styleUrls: ['./credit-icesa-info.component.scss'],
})
export class CreditIcesaInfoComponent  implements OnInit {
  @Input() data:any;
  
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
