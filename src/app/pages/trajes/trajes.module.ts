import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrajesPageRoutingModule } from './trajes-routing.module';

import { TrajesPage } from './trajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajesPageRoutingModule
  ],
  declarations: [TrajesPage]
})
export class TrajesPageModule {}
