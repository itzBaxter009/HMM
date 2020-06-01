import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EHereditariasPage } from './ehereditarias.page';

const routes: Routes = [
  {
    path: '',
    component: EHereditariasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EHereditariasPageRoutingModule {}
