import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngsoftwarePageRoutingModule } from './ingsoftware-routing.module';

import { IngsoftwarePage } from './ingsoftware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngsoftwarePageRoutingModule
  ],
  declarations: [IngsoftwarePage]
})
export class IngsoftwarePageModule {}
