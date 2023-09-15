import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngsoftwarePage } from './ingsoftware.page';

const routes: Routes = [
  {
    path: '',
    component: IngsoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngsoftwarePageRoutingModule {}
