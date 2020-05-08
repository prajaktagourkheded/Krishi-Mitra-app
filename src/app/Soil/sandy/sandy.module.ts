import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandyPageRoutingModule } from './sandy-routing.module';

import { SandyPage } from './sandy.page';

import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SandyPageRoutingModule
  ],
  declarations: [SandyPage]
})
export class SandyPageModule {}
