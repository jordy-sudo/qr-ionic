// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrecosFormComponent } from '../components/forms/crecos-form/crecos-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CrecosFormComponent],
  imports: [CommonModule, ReactiveFormsModule, 
    FormsModule,
    IonicModule],
  exports: [CrecosFormComponent],
})
export class SharedModule { }
