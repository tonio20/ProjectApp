import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortafolioPPageRoutingModule } from './portafolio-p-routing.module';

import { PortafolioPPage } from './portafolio-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortafolioPPageRoutingModule
  ],
  declarations: [PortafolioPPage]
})
export class PortafolioPPageModule {}
