import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestPaswordPage } from './rest-pasword.page';

const routes: Routes = [
  {
    path: '',
    component: RestPaswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestPaswordPageRoutingModule {}
