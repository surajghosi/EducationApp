import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidzonePageRoutingModule } from './kidzone-routing.module';

import { KidzonePage } from './kidzone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidzonePageRoutingModule
  ],
  declarations: [KidzonePage]
})
export class KidzonePageModule {}
