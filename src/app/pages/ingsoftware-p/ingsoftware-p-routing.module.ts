import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngsoftwarePPage } from './ingsoftware-p.page';

const routes: Routes = [
  {
    path: '',
    component: IngsoftwarePPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngsoftwarePPageRoutingModule {}
