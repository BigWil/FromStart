import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { UserData } from '../../providers/user-data';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserData ) { }

    goToPlaces(category) {
      this.navigateTo('PlacesPage', category);
    }
    goCategories() {
      //this.userData.setVtype('vacationers');
      //this.navCtrl.setRoot('MainPage');
      this.navigateTo('CategoryPage');
    }



}
