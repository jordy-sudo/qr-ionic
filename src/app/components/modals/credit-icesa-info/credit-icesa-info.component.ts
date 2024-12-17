import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-icesa-info',
  templateUrl: './credit-icesa-info.component.html',
  styleUrls: ['./credit-icesa-info.component.scss'],
})
export class CreditIcesaInfoComponent  implements OnInit {
  @Input() data:any;
  
  constructor() { }

  ngOnInit() {
    console.log(this.data); 
  }




}
