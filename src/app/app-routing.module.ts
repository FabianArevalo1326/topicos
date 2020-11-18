import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from './app.component';
// import {NzResultNotFoundComponent} from 'ng-zorro-antd/result/partial/not-found';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomePageModule),
        },
      {
        path: 'product',
        loadChildren: () => import('./components/pages/home/product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./components/pages/home/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./components/pages/home/contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'detail/:code',
        loadChildren: () => import('./components/pages/home/detail/detail.module').then(m => m.DetailModule),
      },
      {
        path: 'house/:code',
        loadChildren: () => import('./components/pages/home/house/house.module').then(m => m.HouseModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
