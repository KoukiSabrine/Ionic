import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailAccessoirePage } from './detail-accessoire';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    DetailAccessoirePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailAccessoirePage),
    StarRatingModule
  ],
})
export class DetailAccessoirePageModule {}
