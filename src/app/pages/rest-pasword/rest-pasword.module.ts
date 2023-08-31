import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestPaswordPageRoutingModule } from './rest-pasword-routing.module';

import { RestPaswordPage } from './rest-pasword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestPaswordPageRoutingModule
  ],
  declarations: [RestPaswordPage]
})
export class RestPaswordPageModule {}
