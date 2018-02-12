import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserData } from '../../providers/user-data';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  whatvtype: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserData ) { }





}
