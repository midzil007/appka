import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerDataPage } from './customer-data';

@NgModule({
  declarations: [
    CustomerDataPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerDataPage),
  ],
  exports: [
    CustomerDataPage
  ]
})
export class CustomerDataPageModule {}
