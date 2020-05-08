import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlluvialPageRoutingModule } from './alluvial-routing.module';

import { AlluvialPage } from './alluvial.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    AlluvialPageRoutingModule
  ],
  declarations: [AlluvialPage]
})
export class AlluvialPageModule {}
