import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoilPageRoutingModule } from './soil-routing.module';

import { SoilPage } from './soil.page';

import {TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SoilPageRoutingModule
  ],
  declarations: [SoilPage]
})
export class SoilPageModule {}
