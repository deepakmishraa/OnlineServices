import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedualePageRoutingModule } from './scheduale-routing.module';

import { SchedualePage } from './scheduale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedualePageRoutingModule
  ],
  declarations: [SchedualePage]
})
export class SchedualePageModule {}
