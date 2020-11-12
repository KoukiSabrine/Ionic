import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccessoiresPage } from './accessoires';

@NgModule({
  declarations: [
    AccessoiresPage,
  ],
  imports: [
    IonicPageModule.forChild(AccessoiresPage),
  ],
})
export class AccessoiresPageModule {}
