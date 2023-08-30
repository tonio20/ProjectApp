import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrajesPage } from './trajes.page';

const routes: Routes = [
  {
    path: '',
    component: TrajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrajesPageRoutingModule {}
