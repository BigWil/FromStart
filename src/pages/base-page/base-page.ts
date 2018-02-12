import { Injector } from '@angular/core';
import { NavController, LoadingController, ToastController, NavParams,
  AlertController, MenuController } from 'ionic-angular';

export abstract class BasePage {

  public isErrorViewVisible: boolean;
  public isEmptyViewVisible: boolean;
  public isContentViewVisible: boolean;
  public isLoadingViewVisible: boolean;

  protected refresher: any;
  protected infiniteScroll: any;
  protected navParams: NavParams;

  private navCtrl: NavController;
  private toastCtrl: ToastController;
  private loadingCtrl: LoadingController;
  private alertCtrl: AlertController;

  constructor(injector: Injector) {
    this.loadingCtrl = injector.get(LoadingController);
    this.toastCtrl = injector.get(ToastController);
    this.navCtrl = injector.get(NavController);
    this.alertCtrl = injector.get(AlertController);
    this.navParams = injector.get(NavParams);

    let menu = injector.get(MenuController);
    menu.swipeEnable(this.enableMenuSwipe());
  }

  abstract enableMenuSwipe(): boolean;

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

  showConfirm(message: string): Promise<boolean> {

    return new Promise((resolve, reject) => {

      this.translate.get(['OK', 'CANCEL']).subscribe(values => {

        let confirm = this.alertCtrl.create({
          title: '',
          message: message,
          buttons: [{
            text: values.CANCEL,
            handler: () => {
              reject();
            }
          }, {
            text: values.OK,
            handler: () => {
              resolve(true);
            }
          }]
        });

        confirm.present();
      });
    });
  }

  navigateTo(page: any, params: any = {}) {
    this.navCtrl.push(page, params);
  }

}
