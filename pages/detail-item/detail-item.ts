import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


/**
 * Generated class for the DetailItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail-item',
  templateUrl: 'detail-item.html',
})
export class DetailItemPage {

	html : string;
	title : string;
	imagepath: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	 let url = 'https://www.shop-jura.cz/?getproduct=1&id='+this.navParams.get('id');
    this.http.get(url).map(res => res.json()).subscribe(data => {
    	console.log(data.product);
       this.title = data.product.title;
       this.html = data.product.html;
       this.imagepath = data.product.photo; 
       
            
    });
}
 
  ionViewDidLoad() {
  }



}
