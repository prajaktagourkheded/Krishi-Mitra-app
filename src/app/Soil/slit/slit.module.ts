import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlitPageRoutingModule } from './slit-routing.module';

import { SlitPage } from './slit.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    SlitPageRoutingModule
  ],
  declarations: [SlitPage]
})
export class SlitPageModule {}
