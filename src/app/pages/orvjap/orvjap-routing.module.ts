import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrvjapPage } from './orvjap.page';

const routes: Routes = [
  {
    path: '',
    component: OrvjapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrvjapPageRoutingModule {}
