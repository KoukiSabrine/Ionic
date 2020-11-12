import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailChaussurePage } from './detail-chaussure';
import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [
    DetailChaussurePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailChaussurePage),
    StarRatingModule
  ],
})
export class DetailChaussurePageModule {}
