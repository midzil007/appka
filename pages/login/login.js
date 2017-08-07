var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { CustomerPage } from '../customer/customer';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, view, http) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.http = http;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad LoginPage'); 
    };
    LoginPage.prototype.singIn = function () {
        var _this = this;
        this.email = "b.kachlikova@akmrazik.cz";
        this.http.get('https://www.shop-jura.cz/?loginapi=1&email=' + this.email).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.id) {
                //this.dataService.save(data);
                _this.islogin = true;
                _this.navCtrl.push(CustomerPage, {
                    data: data
                });
            }
            // něco jako neplatný email
            //	console.log(this.islogin);    
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController, ViewController, Http])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map