import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormCreditCrecos } from 'src/app/interfaces/crecos/form.interface';

@Component({
  selector: 'app-crecos-form',
  templateUrl: './crecos-form.component.html',
  styleUrls: ['./crecos-form.component.scss'],
})
export class CrecosFormComponent  implements OnInit {
  @Input() action!: (data:any) => void;

  formCredito = new FormGroup({
    cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^[0-9]*$'),]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$'),]),
  });

  constructor() { }

  ngOnInit() {}

  async onSubmit() {
    this.action(this.formCredito);
  }

  getFirstErrorMessage(errors: any, input: string): string {
    if (errors?.['required']) {
      return `La ${input} es obligatoria`;
    }
    if (errors?.['minlength']) {
      return `La ${input} debe tener al menos 10 caracteres`;
    }
    if (errors?.['maxlength']) {
      return `La ${input} debe tener como máximo 13 caracteres`;
    }
    if (errors?.['pattern']) {
      return `La ${input} solo puede contener números`;
    }
    return '';
  }
}
