import { Component, OnInit } from '@angular/core';
// import * as jwt from 'jsonwebtoken';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  private appUrl: string = environment.appUrl;


  qrCodeCresa: string = '';
  qrCodeCrecos: string = '';
  qrCodeOrvJap: string = '';

  constructor() { }

  ngOnInit() {
    this.generateQrCode();
  }

  generateQrCode(){
    // const token = this.generateToken({userId:1234, role:'user'});
    // this.qrCodeCresa = `${this.appUrl}/credit?unidadNegocio=cresa`
    this.qrCodeCrecos = `${this.appUrl}/folder/credit?unidadNegocio=orvjap`
    this.qrCodeOrvJap = `${this.appUrl}/folder/credit?unidadNegocio=crecos`
  }

  

  // generateToken(payload:object):string{
  //   try {
  //     return jwt.sign(payload,environment.jwtSecret);
  //   } catch (error) {
  //     console.log('Error al generar el token', error);
  //     return'';
  //   }
  // }

}