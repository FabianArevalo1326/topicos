import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HouseComponent } from './house.component';


import {LayoutModule} from '../../../shared/layout/layout.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {HousePageRoutingModule } from '../house/house-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HousePageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,

  ],
  declarations: [HouseComponent],
  exports: []
})
export class HouseModule{}
