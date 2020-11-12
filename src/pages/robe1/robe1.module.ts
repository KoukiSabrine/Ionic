import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Robe1Page } from './robe1';
import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [
    Robe1Page,
  ],
  imports: [
    IonicPageModule.forChild(Robe1Page),
    StarRatingModule
  ],
})
export class Robe1PageModule {}
