import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrecosPageRoutingModule } from './crecos-routing.module';

import { CrecosPage } from './crecos.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrecosPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CrecosPage]
})
export class CrecosPageModule {}
