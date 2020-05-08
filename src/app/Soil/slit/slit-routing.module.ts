import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlitPage } from './slit.page';

const routes: Routes = [
  {
    path: '',
    component: SlitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlitPageRoutingModule {}
