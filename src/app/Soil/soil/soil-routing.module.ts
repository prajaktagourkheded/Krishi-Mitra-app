import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoilPage } from './soil.page';

const routes: Routes = [
  {
    path: '',
    component: SoilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoilPageRoutingModule {}
