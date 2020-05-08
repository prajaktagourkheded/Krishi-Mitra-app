import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChalkPageRoutingModule } from './chalk-routing.module';

import { ChalkPage } from './chalk.page';

import { TranslateModule } from '@ngx-translate/core' ; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    ChalkPageRoutingModule
  ],
  declarations: [ChalkPage]
})
export class ChalkPageModule {}
