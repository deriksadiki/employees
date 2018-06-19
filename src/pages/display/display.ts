import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import arr from '../../app/array'
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitizer: DomSanitizer,public alertCtrl: AlertController) {
  }

arr2 = arr;
imgurl;

showConfirm(p) {
  const confirm = this.alertCtrl.create({
    title: 'Remove Employee?',
    message: 'Do you agree to remove this Employee?',
    buttons: [
      {
        text: 'Disagree',
        handler: () => {
          console.log("disagree clicked");
          
        }
      },
      {
        text: 'Agree',
        handler: () => {
        arr.splice(p,1);
        }
      }
    ]
  });
  confirm.present();
}

}
