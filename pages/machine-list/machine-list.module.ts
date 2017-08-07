import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineListPage } from './machine-list';

@NgModule({
  declarations: [
    MachineListPage,
  ],
  imports: [
    IonicPageModule.forChild(MachineListPage),
  ],
  exports: [
    MachineListPage
  ]
})
export class MachineListPageModule {}
