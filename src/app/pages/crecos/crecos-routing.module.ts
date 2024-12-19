import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrecosPage } from './crecos.page';

const routes: Routes = [
  {
    path: '',
    component: CrecosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrecosPageRoutingModule {}
