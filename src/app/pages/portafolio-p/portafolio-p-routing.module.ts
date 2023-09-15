import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioPPage } from './portafolio-p.page';

const routes: Routes = [
  {
    path: '',
    component: PortafolioPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortafolioPPageRoutingModule {}
