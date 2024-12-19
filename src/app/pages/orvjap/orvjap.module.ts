import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrvjapPageRoutingModule } from './orvjap-routing.module';

import { OrvjapPage } from './orvjap.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrvjapPageRoutingModule,
    SharedModule
  ],
  declarations: [OrvjapPage]
})
export class OrvjapPageModule {}
