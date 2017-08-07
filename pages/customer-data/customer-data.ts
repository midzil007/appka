import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import { ModalWindowPage } from '../../pages/modal-window/modal-window';
import { CustomerPage } from '../../pages/customer/customer';
import { DataProvider } from '../../providers/data/data';
  

/** 
 * Generated class for the CustomerDataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */ 
@IonicPage()
@Component({
  selector: 'page-customer-data',
  templateUrl: 'customer-data.html', 
})
export class CustomerDataPage {

 lastData = []  ; 
  getMachinesList = []; 

    constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
      if(this.navParams.get('data'))
      {
        this.lastData = this.navParams.get('data');  
      }
      else{
        this.dataService.getData().then((userdata) => {
 
      if(userdata){
        this.lastData = JSON.parse(userdata); 
      }
    }); 
      }  
  }   

  saveCustomer()
  {   

   this.dataService.save(this.lastData);
   let profileModal = this.modalCtrl.create(ModalWindowPage, {});
   profileModal.present();
   this.navCtrl.push(CustomerPage);
  }


}
