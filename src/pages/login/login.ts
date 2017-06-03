import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, MenuController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../../providers/auth-service';
import { CommonService } from '../../providers/common-service';

/*
TODO : To Login Component Page.
Method : LoginPage
*/
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loading: Loading;

  public loginCredentials = { userId: 'ash123', password: '111111' };
  public typeList: any[] = [{ value: 1, text: 'option 1', checked: false }, { value: 2, text: 'option 2', checked: false }];

  constructor(
    public nav: NavController,
    public auth: AuthService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public http: Http,
    public commonService: CommonService,
    public menuController: MenuController) {
    this.menuController.swipeEnable(false, 'sideMenu');
  }

  /*
  TODO : To Login User Function.
  Method : login
  */
  public login() {
    let THIS = this;
    if (this.loginCredentials.userId == 'ash123' && this.loginCredentials.password == '111111') {
      THIS.commonService.showLoading();
      THIS.auth.setCurrentUser(this.loginCredentials);
      THIS.nav.setRoot('Dashboard');
    } else {
      THIS.commonService.showErrorAlert('Invalid Credentials');
    }
  }
}