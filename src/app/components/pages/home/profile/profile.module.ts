import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';

import { ProfilePageRoutingModule } from './profile-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,

  ],
  declarations: [ProfileComponent],
  exports: []
})
export class ProfileModule{}
