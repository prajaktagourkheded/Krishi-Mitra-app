import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeatPageRoutingModule } from './peat-routing.module';

import { PeatPage } from './peat.page';

import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PeatPageRoutingModule
  ],
  declarations: [PeatPage]
})
export class PeatPageModule {}
