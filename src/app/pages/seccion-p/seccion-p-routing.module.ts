import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionPPage } from './seccion-p.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionPPageRoutingModule {}
