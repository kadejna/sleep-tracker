import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'overnight-log',
    loadChildren: () => import('./overnight-log/overnight-log.module').then( m => m.OvernightLogPageModule)
  },
  {
    path: 'sleepiness-log',
    loadChildren: () => import('./sleepiness-log/sleepiness-log.module').then( m => m.SleepinessLogPageModule)
  },
  {
    path: 'data-view',
    loadChildren: () => import('./data-view/data-view.module').then( m => m.DataViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
