import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClayPage } from './clay.page';



const routes: Routes = [
  {
    path: '',
    component: ClayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClayPageRoutingModule {}
