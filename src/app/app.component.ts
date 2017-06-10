import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SQLite } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

 
@Component({
  templateUrl: 'app.html'
})
export class InterestApp {
  public rootPage:any = 'LoginPage';
  public toggleLotterySubMenu = false;
  public togglePricebookSubMenu = false;
  public activePage:any = 'Dashboard';
  @ViewChild(Nav) nav: Nav;
  public userSession: any = {};

  constructor(
    public authService: AuthService, 
    public platform: Platform, 
    public splashScreen: SplashScreen, 
    public menuController: MenuController) {
    platform.ready().then(() => {
      splashScreen.hide();
      platform.ready().then(() => {
            let db = new SQLite();
            // db.("CREATE TABLE IF NOT EXISTS people (userId PRIMARY KEY, firstName TEXT, middleName TEXT, lastName TEXT, lastName TEXT, payment REAL, interest REAL, paymentDate TEXT, dueDate TEXT, note TEXT, agentName TEXT, mobileNo TEXT, mobileNo2 TEXT, isDeleted INTEGER, isActive INTEGER)", {}).then((data) => {
            //     console.log("TABLE CREATED: ", data);
            // }, (error) => {
            //     console.error("Unable to execute sql", error);
            // })
        });
    });

    this.userSession = this.authService.getUserSessionInfo();
    // this.menuController.enable(false);
    console.log(' auth ' + JSON.stringify(authService));
    this.activePage = 'Dashboard';
  }

  public ionViewDidEnter() {
    this.menuController.swipeEnable(false, 'sideMenu');
  }

  public openPage(page, flag) { 
    this.activePage = page;
    console.log('activePage' + this.activePage);
    this.nav.setRoot(page);
  }

  public toggleSubMenu(value : any){
    if(value == 'Lottery'){
      this.toggleLotterySubMenu = !this.toggleLotterySubMenu;
    } else if(value == 'Pricebook'){
      this.togglePricebookSubMenu = !this.togglePricebookSubMenu;
    }
  }

  public logout() {
    this.authService.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage');
    });
  }

  public checkActive(page: any){
    return page == this.activePage;
  }
}