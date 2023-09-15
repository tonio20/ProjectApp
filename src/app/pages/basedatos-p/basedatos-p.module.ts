import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasedatosPPageRoutingModule } from './basedatos-p-routing.module';

import { BasedatosPPage } from './basedatos-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasedatosPPageRoutingModule
  ],
  declarations: [BasedatosPPage]
})
export class BasedatosPPageModule {}
