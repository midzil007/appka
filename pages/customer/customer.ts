import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerDataPage } from '../customer-data/customer-data';
import { CustomerDeliveryPage } from '../customer-delivery/customer-delivery';
import { CustomerPropertiesPage } from '../customer-properties/customer-properties';
/**
 * Generated class for the CustomerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(site)
  {
  	switch (site) { 
  		case "data":
  			this.navCtrl.push(CustomerDataPage);
  		break;
  		case "delivery":
  			this.navCtrl.push(CustomerDeliveryPage);
  		break; 
  		case "properties":
  			this.navCtrl.push(CustomerPropertiesPage);
  		break;
  	}
  }

}
