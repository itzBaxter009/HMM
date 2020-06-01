import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HenfermedadesPage } from './henfermedades.page';

const routes: Routes = [
  {
    path: '',
    component: HenfermedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HenfermedadesPageRoutingModule {}
