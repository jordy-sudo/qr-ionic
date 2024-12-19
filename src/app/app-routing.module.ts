import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreditInfoComponent } from './components/modals/credit-info/credit-info.component';
import { CommonModule } from '@angular/common';
import { CreditCrecosInfoComponent } from './components/modals/credit-crecos-info/credit-crecos-info.component';
import { CreditIcesaInfoComponent } from './components/modals/credit-icesa-info/credit-icesa-info.component';
import { QueryParamGuard } from './guards/query-param.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/credit',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate:[QueryParamGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'error-page',
    loadChildren: () => import('./pages/error-page/error-page.module').then( m => m.ErrorPagePageModule)
  },
  {
    path: 'crecos',
    loadChildren: () => import('./pages/crecos/crecos.module').then( m => m.CrecosPageModule)
  },
  {
    path: 'orvjap',
    loadChildren: () => import('./pages/orvjap/orvjap.module').then( m => m.OrvjapPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    IonicModule.forRoot(),
  ],
  exports: [RouterModule],
  declarations:[CreditInfoComponent, CreditCrecosInfoComponent, CreditIcesaInfoComponent]
})
export class AppRoutingModule {}
