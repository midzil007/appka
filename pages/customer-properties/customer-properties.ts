import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { CustomerPage } from '../../pages/customer/customer';

@IonicPage()
@Component({
  selector: 'page-customer-properties',
  templateUrl: 'customer-properties.html',
})

export class CustomerPropertiesPage {
  
  milkWays : Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider) {
    this.milkWays = false; 
    this.dataService.getOptions("milkWays").then((milkWays) => {       
      if(milkWays == true){   
        this.milkWays = milkWays;  
      }
    }); 
  }
  
  saveMilkWay () : void
  {
    if(this.milkWays == true)
    {
      this.dataService.saveOptions(true, "milkWays");
    }
    else{
     this.dataService.saveOptions(false, "milkWays");
    }
    this.navCtrl.pop(CustomerPage); 
  }
 
 
}
