import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChalkPage } from './chalk.page';

const routes: Routes = [
  {
    path: '',
    component: ChalkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChalkPageRoutingModule {}
