import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  username ="derik";
  password = "1234";

  login(usrn, pass){
    if (usrn == this.username && pass == this.password)
    {
      const message =  this.alertCtrl.create({
        title:'Sign In successfull',
        message: 'Welcome back Sir',
        buttons:['ok']
      });
      message.present();
      this.navCtrl.push(HomePage);
    }
    else
    {
      const  err = this.alertCtrl.create({
        title:'Sign In unsuccessfull',
        message: 'please enter the correct details',
        buttons:['Ok']
      });
      err.present();
    }
  }

}

 