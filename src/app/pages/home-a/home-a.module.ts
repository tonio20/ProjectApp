import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAPageRoutingModule } from './home-a-routing.module';

import { HomeAPage } from './home-a.page';
import { HomeAlumComponent } from 'src/app/components/home-alum/home-alum.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAPageRoutingModule
  ],
  declarations: [HomeAPage,HomeAlumComponent]
})
export class HomeAPageModule {}
