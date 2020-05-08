import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionPage } from './question.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionPage
  },
  {
    path: 'category',
    loadChildren: () => import('../Question/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'display',
    loadChildren: () => import('../Question/display/display.module').then( m => m.DisplayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionPageRoutingModule {}
