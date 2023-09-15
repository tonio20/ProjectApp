import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionPPageRoutingModule } from './seccion-p-routing.module';

import { SeccionPPage } from './seccion-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionPPageRoutingModule
  ],
  declarations: [SeccionPPage]
})
export class SeccionPPageModule {}
