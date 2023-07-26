import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongslocalModalPageRoutingModule } from './songslocal-modal-routing.module';

import { SongslocalModalPage } from './songslocal-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongslocalModalPageRoutingModule
  ],
  declarations: [SongslocalModalPage]
})
export class SongslocalModalPageModule {}
