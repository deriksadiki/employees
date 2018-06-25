import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import arr from '../../app/array'
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {details} from '../../app/obj'

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
imgurl ;


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

back  = function() {
  this.navCtrl.pop();
}
name2;
surname2;
id2;
role2;
update(id){
  

  this.name2 = arr[id].name;
  this.surname2 =arr[id].surname;
  this.id2 =  arr[id].id;
  this.role2 = arr[id].role;

  const prompt = this.alertCtrl.create({
    title: 'Update',
    message: "Enter The New values",
    inputs: [
      {
        name: 'name',
        placeholder: arr[id].name
      },
      {
        name: 'surname',
        placeholder: arr[id].surname
      },
      {
        name: 'ID',
        placeholder: arr[id].id
      },
      {
        name: 'Role',
        placeholder: arr[id].role
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          if (data.name != ""){
            let a = new details(data.name,  this.surname2, this.id2,  this.role2,arr[id].pic);
            arr[id] = a;
          }
          else if (data.surname != ""){
            let a = new details(this.name2, data.surname, this.id2,  this.role2 ,arr[id].pic);
            arr[id] = a;
          }
          else if (data.id != "")
          {
            let a = new details(this.name2, this.surname2, data.id,  this.role2 ,arr[id].pic);
            arr[id] = a;
          }
          else if (data.role != "")
          {
            let a = new details(this.name2, this.surname2, this.id2,  data.role ,arr[id].pic);
            arr[id] = a; 
          }
        }
      }
    ]
  });
  prompt.present();
}

}


