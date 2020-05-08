import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackPageRoutingModule } from './black-routing.module';

import { BlackPage } from './black.page';

import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BlackPageRoutingModule
  ],
  declarations: [BlackPage]
})
export class BlackPageModule {}
