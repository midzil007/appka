import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

 export interface Product
{
	id: number,
	title: string,
	url: string,
	image: string,
	desc: string,
	price: number,
  dph: number
};

export interface BasketItem
{
  id: number,
  count: number,
  price: number,
  title: string,
  dph: number
}

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {

  private listProducts : Array<Array<Product>>;
  private listBasketItems = []; 
  cartlist = [];
  countItems : number;
   total : number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage : Storage,private http: Http, private dataService: DataProvider) {
  	this.listProducts = []; 
    this.listBasketItems = [];
    this.http.get('https://www.shop-jura.cz/?getproducts=1').map(res => res.json()).subscribe(data => {
	    this.listProducts = this.initProducts(data.products);
    });
    this.dataService.getOptions("listBasketItems").then((listBasketItems) => {
      if(listBasketItems){   
       //   this.listBasketItems = listBasketItems; 
         // this.getItemsInfo();   
      }  
    });
  } 



 initProducts(data: any) : Array<Array<Product>>
  {  
   
    let list : Array<Array<Product>> = [];
     let rowNum : number  = 0;
     let item :  any;
     let ii : number = 0;
     for (let i = 0; i < data.length; i+=2) { //iterate images

      list[rowNum] = Array(2); //declare two elements per row
        if (data[i]) { //check file URI exists
          item = data[i];
          list[rowNum][0] = <Product>{
              id: item.id,
              title: item.title, 
              url: item.path,
              price: item.price,    
              desc: item.html,
              image: item.photo,
            }
             this.setBasketItem(item,0);
        }
        if (data[i+1]) { //repeat for the second image
          item = data[i+1];
          list[rowNum][1] = <Product>{
              id: item.id,
              title: item.title, 
              url: item.path,
              price: item.price,    
              desc: item.html,
              image: item.photo,
            }
            this.setBasketItem(item, 0);
        }
      
        rowNum++; //go on to the next row   
      }
       console.log(this.listBasketItems);
       
       return list;
  }

  setBasketItem(item : any, count : number)
  {
    let temp =  [];  
  	 let dataItem = <BasketItem>{
         id: item.id,  
         price: item.price,     
         count:  count,  
         title: item.title  
       };
      let tempItem :any; 
      this.countItems = 0;
     for (var saveItem of this.listBasketItems) {
         if(saveItem.id == item.id)
           tempItem = dataItem;
         else 
           tempItem = item;
         console.log(tempItem);
         temp.push(tempItem);
         this.countItems += tempItem.count; 
      }            
      console.log(this.countItems );  
      console.log(temp); 
     this.listBasketItems.push(dataItem);
  }

  showCountItem(itemId : Number) : Number
  {

    return this.cartlist[itemId.toString()]; 
  } 

  

   initBasket(item : Product, mark: string) 
  {  
    this.storage.clear(); 
    let object = this.listBasketItems[item.id];
    let count: number = 0;
    if (object == null || !parseInt(object.count)) {
        count = 1;
    }
    else{ 
      if(mark == '+')
       {
         count = parseInt(object.count) + 1;   
       }
       else{
         count = parseInt(object.count) - 1;   
       }
        
     }
   		this.setBasketItem(item,count);
     //console.log(this.listBasketItems);  
     
     //this.dataService.saveOptions(this.listBasketItems, "listBasketItems");
   // this.getItemsInfo(); 
  }
  

 
  
}
