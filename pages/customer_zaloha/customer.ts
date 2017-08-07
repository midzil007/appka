import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { ModalWindowPage } from '../modal-window/modal-window';
import { MachineListPage } from '../machine-list/machine-list';
import { AddItemPage } from '../add-item/add-item';
 

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

	lastData = []  ; 
  getMachinesList = [];

    constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
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
    this.dataService.getMachinesList().then((machinelist) => {
 
      if(machinelist){  
         this.navCtrl.push(MachineListPage,{}); 
      }
      else{ 
         this.navCtrl.push(AddItemPage,{}); 
      }
    }); 
       
  }


}
