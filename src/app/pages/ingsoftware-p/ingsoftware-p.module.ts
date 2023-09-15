import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngsoftwarePPageRoutingModule } from './ingsoftware-p-routing.module';

import { IngsoftwarePPage } from './ingsoftware-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngsoftwarePPageRoutingModule
  ],
  declarations: [IngsoftwarePPage]
})
export class IngsoftwarePPageModule {}
