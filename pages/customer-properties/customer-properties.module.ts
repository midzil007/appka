import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPropertiesPage } from './customer-properties';

@NgModule({
  declarations: [
    CustomerPropertiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerPropertiesPage),
  ],
  exports: [
    CustomerPropertiesPage
  ]
})
export class CustomerPropertiesPageModule {}
