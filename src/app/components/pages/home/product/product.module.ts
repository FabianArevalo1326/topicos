import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';

import { ProductPageRoutingModule } from './product-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,


  ],
  declarations: [ProductComponent],
  exports: []
})
export class ProductModule{}
