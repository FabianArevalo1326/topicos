import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

import { ContactPageRoutingModule } from './contact-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,

  ],
  declarations: [ContactComponent],
  exports: []
})
export class ContactModule{}
