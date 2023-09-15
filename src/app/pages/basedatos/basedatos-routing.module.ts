import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasedatosPage } from './basedatos.page';

const routes: Routes = [
  {
    path: '',
    component: BasedatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasedatosPageRoutingModule {}
