import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClayPageRoutingModule } from './clay-routing.module';

import { ClayPage } from './clay.page';

import {TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClayPageRoutingModule
  ],
  declarations: [ClayPage]
})
export class ClayPageModule {}
