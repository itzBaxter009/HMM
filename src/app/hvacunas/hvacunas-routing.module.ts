import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HVacunasPage } from './hvacunas.page';

const routes: Routes = [
  {
    path: '',
    component: HVacunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HVacunasPageRoutingModule {}
