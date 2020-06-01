import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EHereditariasPageRoutingModule } from './ehereditarias-routing.module';

import { EHereditariasPage } from './ehereditarias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EHereditariasPageRoutingModule
  ],
  declarations: [EHereditariasPage]
})
export class EHereditariasPageModule {}
