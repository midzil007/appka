import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { CustomerPage } from '../customer/customer';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	email: string; 
	islogin;

  constructor(public navCtrl: NavController, public view: ViewController, public http: Http) {
  }

  ionViewDidLoad() {
  //  console.log('ionViewDidLoad LoginPage'); 
  }
 
  singIn() 
  {
    this.email = "b.kachlikova@akmrazik.cz";
  	 this.http.get('https://www.shop-jura.cz/?loginapi=1&email='+this.email).map(res => res.json()).subscribe(data => {       
 	 	if(data.id)      
 	 	{    
 	 		//this.dataService.save(data);
 	 		this.islogin = true; 
 	 		this.navCtrl.push(CustomerPage,{
        data : data});  
 	 	}
      // něco jako neplatný email
 	 //	console.log(this.islogin);    
 	 	 
    });  
  	
  } 
}
