import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { CommonService } from '../../providers/common-service';
import { AuthService } from '../../providers/auth-service';

/*
TODO : To Dashboard Component Page
Method : Dashboard
*/
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
  public userSession: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public commonService: CommonService,
    private authService: AuthService,
    public menuController: MenuController) {

    let THIS = this;
    THIS.menuController.swipeEnable(true, 'sideMenu');
    
    THIS.userSession = THIS.authService.getUserSessionInfo();
    console.log(' info ' + JSON.stringify(THIS.userSession));

    if (THIS.userSession == null) {
      THIS.commonService.showErrorAlert('Please login first');
      THIS.navCtrl.setRoot('LoginPage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

  /*
  TODO : To Redirect Page to specific page.
  Method : redirectPage
  */
  public redirectPage(page : any){
      this.navCtrl.setRoot(page);
  }
}
