import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChaussuresPage } from './chaussures';

@NgModule({
  declarations: [
    ChaussuresPage,
  ],
  imports: [
    IonicPageModule.forChild(ChaussuresPage),
  ],
})
export class ChaussuresPageModule {}
