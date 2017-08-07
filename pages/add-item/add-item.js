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
import { IonicPage, LoadingController, ModalController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailItemPage } from '../detail-item/detail-item';
import { ModalWindowPage } from '../modal-window/modal-window';
import { Data } from '../../providers/data';
/**
 * Generated class for the AddItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddItemPage = (function () {
    function AddItemPage(http, dataService, modalCtrl, loadingCtrl, navCtrl) {
        // this.initializeItems(); <- you don't need this anymore
        var _this = this;
        this.http = http;
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        // Show the loading message
        var loadingPopup = this.loadingCtrl.create({
            content: 'Loading posts...'
        });
        this.http.get('https://www.shop-jura.cz/?getproducts=1&onlykavovars=1').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.items = data.products;
            // Hide the loading message
            loadingPopup.dismiss();
        });
    }
    AddItemPage.prototype.initializeItems = function () {
    };
    AddItemPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AddItemPage.prototype.detailItem = function (selectedItem) {
        this.navCtrl.push(DetailItemPage, { selectedItem: selectedItem });
    };
    AddItemPage.prototype.addToList = function (selectedItem) {
        var _this = this;
        var prislusentsti;
        this.dataService.getPrislusenstvi(selectedItem).subscribe(function (result) {
            _this.prislusenstvi = result.data.children;
            console.log("Success : " + _this.prislusenstvi);
        }, function (err) {
            console.error("Error : " + err);
        }, function () {
            console.log('getData completed');
        });
        this.dataService.saveToMachineList(selectedItem, thi);
        var profileModal = this.modalCtrl.create(ModalWindowPage, {});
        profileModal.present();
        // přidat do provideru do listuMachin
        // this.navCtrl.push(MachineListPage,{});
    };
    return AddItemPage;
}());
AddItemPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-add-item',
        templateUrl: 'add-item.html',
    }),
    __metadata("design:paramtypes", [Http, Data, ModalController, LoadingController, NavController])
], AddItemPage);
export { AddItemPage };
//# sourceMappingURL=add-item.js.map