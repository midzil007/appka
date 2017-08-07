import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalWindowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-window',
  templateUrl: 'modal-window.html',
})
export class ModalWindowPage {

  constructor(public viewCtrl: ViewController) {
  }


   dismiss() {
   this.viewCtrl.dismiss();
 }

}
