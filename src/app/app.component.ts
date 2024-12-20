import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'QR', url: '/qr', icon: 'qr-code' },
    // { title: 'Valores a Pagar', url: '/folder/credit', icon: 'cash' },
    { title: 'Crecos', url: '/crecos', icon: 'cash' },
    { title: 'OrvJap', url: '/orvjap', icon: 'cash' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
