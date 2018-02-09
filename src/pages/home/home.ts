import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Main } '../pages/main/main';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    pageMain(){
      this.navController.setRoot(Main);
      }

  }

}


