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
    path: 'repos/:user',
    loadChildren: () => import('./repos/repos.module').then( m => m.ReposModule)
  },
  {
    path: 'repos/:user/:repo/forks',
    loadChildren: () => import('./repos/repos.module').then( m => m.ReposModule)
  },
  {
    path: 'repos/:user/:repo/:type',
    loadChildren: () => import('./users/users.module').then( m => m.UsersModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
