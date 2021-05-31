import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McqPageRoutingModule } from './mcq-routing.module';

import { McqPage } from './mcq.page';
import  { FlashcardComponent } from './flashcard/flashcard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McqPageRoutingModule 
  ],
  declarations: [McqPage ,FlashcardComponent]
})
export class McqPageModule {}
