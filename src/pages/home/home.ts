import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( 
    public navCtrl: NavController, 
    public userData: UserData) 
    { }

  goVacationer() {
    this.userData.setVtype('vacationers');
    this.navCtrl.setRoot('MainPage');
    
  }
  goLocal() {
    //this.storage.set('vtype', 'locals');
    this.navCtrl.setRoot('MainPage');
  }
  goOther() {
    //this.storage.set('vtype', 'others');
    this.navCtrl.setRoot('MainPage');
  }  
  
}

