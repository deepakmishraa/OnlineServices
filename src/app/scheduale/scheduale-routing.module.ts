import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedualePage } from './scheduale.page';

const routes: Routes = [
  {
    path: '',
    component: SchedualePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedualePageRoutingModule {}
