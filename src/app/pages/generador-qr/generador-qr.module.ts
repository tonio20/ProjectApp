import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneradorQRPageRoutingModule } from './generador-qr-routing.module';

import { GeneradorQRPage } from './generador-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneradorQRPageRoutingModule
  ],
  declarations: [GeneradorQRPage]
})
export class GeneradorQRPageModule {}
