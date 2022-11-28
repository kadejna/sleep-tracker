import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'overnight',
        children: [
          {
            path: '',
            loadChildren: () => 
            import('../overnight-log/overnight-log.module').then(m => m.OvernightLogPageModule)
          }
        ]
      },
      {
        path: 'sleepiness',
        children: [
          {
            path: '',
            loadChildren: () => 
            import('../sleepiness-log/sleepiness-log.module').then(m => m.SleepinessLogPageModule)
          }
        ]
      },
      {
        path: 'view',
        children: [
          {
            path: '',
            loadChildren: () => 
            import('../data-view/data-view.module').then(m => m.DataViewPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'data-view',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'data-view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
