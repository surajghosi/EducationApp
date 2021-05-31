import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidzonePage } from './kidzone.page';

const routes: Routes = [
  {
    path: '',
    component: KidzonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidzonePageRoutingModule {}
