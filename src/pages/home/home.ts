import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private storage: Storage, public navCtrl: NavController) { }

  goVacationer() {
    //this.storage.set('vtype', 'vacationers');
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

