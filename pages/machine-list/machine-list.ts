import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { Data } from '../../providers/data';

/**
 * Generated class for the MachineListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-machine-list',
  templateUrl: 'machine-list.html',
})
export class MachineListPage {

	machinelist = [];
  itemsinfo : any;
  showitemsblock: boolean;
  basketlist = [];
  cartlist = [];
  countItems : number;
  test: any;
  total : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data,public view: ViewController) {
  	  this.dataService.getMachinesList().then((machinelist) => {
      if(machinelist){   
          this.machinelist = machinelist; 
      } 
    });
   this.test = 0;


     this.dataService.getBasketList().then((basketlist) => {
      if(basketlist){   
          this.basketlist = basketlist;
          this.getItemsInfo();          
      }  
    });  
  }

  ionViewDidLoad() {
  }
 
   getItemsInfo() 
   {
     console.log( this.basketlist);   
      for (let entry in this.basketlist) {
        let item = this.basketlist[entry];
        if(parseInt(item.count))
        {
          this.cartlist[entry] = item.count;
          this.countItems = parseInt(item.count);
          this.total = parseInt(item.count ) * parseInt(item.price); 
        }
        else{
          this.cartlist[entry] = 0;
        }
      }   
     this.countItems  = 111;
   } 

  
  initBasket(machine_id,item,mark) 
  {  
      this.basketlist = this.dataService.initItemToBasket(machine_id,item,mark,this.basketlist); 
      this.getItemsInfo();  
  }


  sendOrder()
  { 
    for (let entry in this.basketlist) {
      let item = this.basketlist[entry];
      item.count = 0;
      this.basketlist[entry] = item;

    }
    console.log('odesl88no')

  }
 

}
