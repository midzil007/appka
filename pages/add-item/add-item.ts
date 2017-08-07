import { Component } from '@angular/core';
import { IonicPage, LoadingController, ModalController, NavController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailItemPage } from '../detail-item/detail-item';
import { MachineListPage } from '../machine-list/machine-list';
import { ModalWindowPage } from '../modal-window/modal-window';
import { Data } from '../../providers/data';

/** 
 * Generated class for the AddItemPage page.
 * 
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

	private posts: any; // <- I've added the private keyword 
  private items: any; // <- items property is now of the same type as posts
  public machinelist = [];
  constructor(private http: Http,public dataService: Data, private modalCtrl: ModalController, private loadingCtrl: LoadingController, private navCtrl: NavController) {
    this.dataService.getMachinesList().then((machinelist) => {
      if(machinelist){    
          this.machinelist = machinelist; 
      } 
    });
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading posts...'
    });

    this.http.get('https://www.shop-jura.cz/?getproducts=1&onlykavovars=1').map(res => res.json()).subscribe(data => {
        this.items = data.products;
        // Hide the loading message
        loadingPopup.dismiss();
    });
  }

  initializeItems() {
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })   
    }
  }

  detailItem(selectedItem)
  {
      this.navCtrl.push(DetailItemPage,{id : selectedItem});
  }

  addToList(selectedItem) 
  {
    this.dataService.saveToMachineList(selectedItem); 
     let profileModal = this.modalCtrl.create(ModalWindowPage, {});
     profileModal.present();  

    // přidat do provideru do listuMachin
    // this.navCtrl.push(MachineListPage,{});
  }


}
