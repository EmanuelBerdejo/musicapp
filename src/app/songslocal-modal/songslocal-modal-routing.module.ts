import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongslocalModalPage } from './songslocal-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SongslocalModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongslocalModalPageRoutingModule {}
