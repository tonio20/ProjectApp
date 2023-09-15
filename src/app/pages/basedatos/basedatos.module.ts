import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasedatosPageRoutingModule } from './basedatos-routing.module';

import { BasedatosPage } from './basedatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasedatosPageRoutingModule
  ],
  declarations: [BasedatosPage]
})
export class BasedatosPageModule {}
