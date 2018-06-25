import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {DomSanitizer} from '@angular/platform-browser';
import arr from '../../app/array'
import { DisplayPage } from '../display/display';
import { ModalController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public alertCtrl: AlertController,private sanitizer: DomSanitizer,public navCtrl: NavController) { }

 
url:any;

    insertpic =  function (event:any){
     if (event.target.files && event.target.files[0]){
       let reader = new FileReader();
   
       reader.onload = (event:any) =>{
         this.url = event.target.result;
       }
       reader.readAsDataURL(event.target.files[0]);
     }
   }
   
  

  

  addEmp2 = function (name:string, surname:string, id:string, role:string)
  {  
   

     const alert = this.alertCtrl.create({
     title: 'New Employee was successfully added!',
      subTitle: 'You can add more if you want',
   buttons: ['close']
    

     });
     
    if (name != "" && surname != "" && id != "" && role != ""){
    
    let a = new details(name,surname,id,role, this.url);
    arr.push(a);
    alert.present();
    }
  }
  
  view(){
    this.navCtrl.push(DisplayPage);
  }

}

export class details{
  name:string;
  surname:string;
  id:string;
  role:string;
  pic:any;
  constructor(name:string,surname:string,id:string,role:string,pic:any){
          this.name = name;
          this.surname = surname;
          this.id = id;
          this.role = role
          this.pic = pic;
  }
}
