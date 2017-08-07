import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pop } from './pop';

@NgModule({
  declarations: [
    Pop,
  ],
  imports: [
    IonicPageModule.forChild(Pop),
  ],
  exports: [
    Pop
  ]
})
export class PopModule {}
