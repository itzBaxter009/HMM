import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HenfermedadesPageRoutingModule } from './henfermedades-routing.module';

import { HenfermedadesPage } from './henfermedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HenfermedadesPageRoutingModule
  ],
  declarations: [HenfermedadesPage]
})
export class HenfermedadesPageModule {}
