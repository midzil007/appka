// udělat window s validací pro nastavení doprav

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { CustomerPage } from '../../pages/customer/customer';

/**
 * Generated class for the CustomerDeliveryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

export interface Options {
  id: number;
  name: string;
  descr: string;    
  price: string; 
}

@IonicPage()
@Component({
  selector: 'page-customer-delivery',
  templateUrl: 'customer-delivery.html',
})
export class CustomerDeliveryPage {
	private deliverylist : Array<Options>;
	private paymentlist : Array<Options>; 
  private delivery : any;
  private payment : number = 0;

  constructor(private navCtrl: NavController, private http: Http, private data : DataProvider) {
    this.deliverylist = [];
    this.paymentlist = [];
    this.http.get('https://www.shop-jura.cz/?getdelivery=1').map(res => res.json()).subscribe(data => {
        this.deliverylist = this.initOptions(data);   
        //načteni dopravy ze storage
        this.data.getOptions("delivery").then((delivery) => {      
            if(Number(delivery) > 0)
                this.delivery = Number(delivery);
              else
                 this.delivery = Number(this.deliverylist[0].id);
            this.http.get('https://www.shop-jura.cz/?getPayment=1&'+this.delivery).map(res => res.json()).subscribe(data => {
            this.paymentlist = this.initOptions(data); 
            this.data.getOptions("payment").then((payment) => 
                {
                if(Number(payment) >0 )
                  this.payment = Number(payment);
                else
                  this.payment = this.paymentlist[0].id;
                });   
            });
          });
      });
    
  }

  initOptions(data: any) : Array<Options>
  {
    let list : Array<Options> = [];
     let i : number  = 0;
     for (let item of data)
       {
            list[i] = <Options>{
              id: item.id,
              name: item.title, 
              descr: item.descr, 
              price: item.descr,
            }
            i++; 
       }
       return list;
  }
   
   saveOptions() 
   { 
     this.data.saveOptions(this.delivery, "delivery");
     this.data.saveOptions(this.payment, "payment");
     this.navCtrl.push(CustomerPage); 
   }
}
