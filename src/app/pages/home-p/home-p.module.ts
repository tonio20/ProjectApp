import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePPageRoutingModule } from './home-p-routing.module';

import { HomePPage } from './home-p.page';
import { HomeProfComponent } from 'src/app/components/home-prof/home-prof.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePPageRoutingModule
  ],
  declarations: [HomePPage, HomeProfComponent]
})
export class HomePPageModule {}
