import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeatPage } from './peat.page';

const routes: Routes = [
  {
    path: '',
    component: PeatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeatPageRoutingModule {}
