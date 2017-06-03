import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { APIService } from '../../providers/api-service';
import { CommonService } from '../../providers/common-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
TODO : Search Component Page
Method : SearchPage
*/
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  public userSession: any = {};

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public http: Http,
    public loadingController: LoadingController,
    public API_SERVICE: APIService,
    public commonService: CommonService) {

    let THIS = this;
    THIS.userSession = THIS.authService.getUserSessionInfo();
    console.log(' info ' + JSON.stringify(THIS.userSession));

    if (THIS.userSession == null) {
      THIS.commonService.showErrorAlert('Please login first');
      THIS.navCtrl.setRoot('LoginPage');
    }
  }
}