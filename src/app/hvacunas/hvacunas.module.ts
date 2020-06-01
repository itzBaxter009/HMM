import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HVacunasPageRoutingModule } from './hvacunas-routing.module';

import { HVacunasPage } from './hvacunas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HVacunasPageRoutingModule
  ],
  declarations: [HVacunasPage]
})
export class HVacunasPageModule {}
