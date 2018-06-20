import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {DomSanitizer} from '@angular/platform-browser';
import arr from '../../app/array'
import { DisplayPage } from '../display/display';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public alertCtrl: AlertController,private sanitizer: DomSanitizer,public navCtrl: NavController) { }

 
  pic;

  picture2(event){
    this.pic = event.target.value;
   
  }



  addEmp = function (name:string, surname:string, id:string, role:string)
  {  
   

     const alert = this.alertCtrl.create({
     title: 'New Employee was successfully added!',
      subTitle: 'You can add more if you want',
   buttons: ['close']
    

     });
     
    if (name != "" && surname != "" && id != "" && role != ""){
       var re = /images/gi; 
    var str = this.pic;
    var newstr = str.replace(re, " "); 
    var str2 =  newstr
    var splitted = str2.split(" ", 2); 
    var i  = splitted[1];
    i = "../../assets/images/" + i.substr(1,i.length); 
    this.pic = i;
    let a = new details(name,surname,id,role, this.pic);
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
  pic:string;
  constructor(name:string,surname:string,id:string,role:string,pic:string){
          this.name = name;
          this.surname = surname;
          this.id = id;
          this.role = role
          this.pic = pic;
  }
}
