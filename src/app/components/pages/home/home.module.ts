import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { HomePageRoutingModule } from './home-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailComponent } from './detail/detail.component';
import { HouseComponent } from './house/house.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,

  ],
  declarations: [HomeComponent],
  exports: []
})
export class HomePageModule{}
