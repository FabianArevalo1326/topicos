import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail.component';

import { DetailPageRoutingModule } from './Detail-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DetailPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,

  ],
  declarations: [DetailComponent],
  exports: []
})
export class DetailModule{}

