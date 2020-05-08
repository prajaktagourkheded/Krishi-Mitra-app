import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'language',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'question',
    loadChildren: () => import('./question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'soil',
    loadChildren: () => import('./Soil/soil/soil.module').then( m => m.SoilPageModule)
  },
  {
    path: 'sandy',
    loadChildren: () => import('./Soil/sandy/sandy.module').then( m => m.SandyPageModule)
  },
  {
    path: 'clay',
    loadChildren: () => import('./Soil/clay/clay.module').then( m => m.ClayPageModule)
  },
  {
    path: 'red',
    loadChildren: () => import('./Soil/red/red.module').then( m => m.RedPageModule)
  },
  {
    path: 'black',
    loadChildren: () => import('./Soil/black/black.module').then( m => m.BlackPageModule)
  },
  {
    path: 'peat',
    loadChildren: () => import('./Soil/peat/peat.module').then( m => m.PeatPageModule)
  },
  {
    path: 'chalk',
    loadChildren: () => import('./Soil/chalk/chalk.module').then( m => m.ChalkPageModule)
  },
  {
    path: 'slit',
    loadChildren: () => import('./Soil/slit/slit.module').then( m => m.SlitPageModule)
  },
  {
    path: 'alluvial',
    loadChildren: () => import('./Soil/alluvial/alluvial.module').then( m => m.AlluvialPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'government',
    loadChildren: () => import('./government/government.module').then( m => m.GovernmentPageModule)
  },
  {
    path: 'tools',
    loadChildren: () => import('./tools/tools.module').then( m => m.ToolsPageModule)
  },
  {
    path: 'fertilizer',
    loadChildren: () => import('./fertilizer/fertilizer.module').then( m => m.FertilizerPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
