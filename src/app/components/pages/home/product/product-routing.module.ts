import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {ProductComponent} from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule{}
