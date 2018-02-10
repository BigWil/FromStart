import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  goVacationer() {
    this.navCtrl.setRoot('MainPage');
    alert('Vacationer');
  }
  goLocal() {
    this.navCtrl.setRoot('MainPage');
  }
  goOther() {
    this.navCtrl.setRoot('MainPage');
  }  
  
}

