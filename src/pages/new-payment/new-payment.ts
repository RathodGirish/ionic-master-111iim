import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, NavParams } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../../providers/auth-service';
import { CommonService } from '../../providers/common-service';
import { APIService } from '../../providers/api-service';
import 'rxjs/add/operator/map';


/*
TODO : To Add New Payment Component Page
Method : NewPaymentPage
*/
@IonicPage()
@Component({
  selector: 'page-new-payment',
  templateUrl: 'new-payment.html'
})

export class NewPaymentPage {
  public userSession: any;
  public newPaymentObj = { "userId": "", "firstName": "", "middleName": "", "lastName": "", "payment": 0, "interest": "5", "paymentDate": "", "dueDate": "", "note": '', "agentName": "", "mobileNo": "", "mobileNo2": "", "isDeleted": false, "isActive": true };

  public statesCodes = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public commonService: CommonService,
    public API_SERVICE: APIService,
    public alertCtrl: AlertController) {

    let THIS = this;
    THIS.userSession = THIS.authService.getUserSessionInfo();
    console.log(' info ' + JSON.stringify(THIS.userSession));

    if (THIS.userSession == null) {
      THIS.commonService.showErrorAlert('Please login first');
      THIS.navCtrl.setRoot('LoginPage');
    }

    this.statesCodes = this.API_SERVICE.getAllStates();
  }


  /*
  TODO : To Add New Game
  Method : newPayment
  */
  public newPayment() {
    let THIS = this;
    THIS.commonService.showLoading();
    console.log('newPaymentObj ' + JSON.stringify(THIS.newPaymentObj));

    let body = new FormData();

    console.log('body ' + JSON.stringify(body));

    let headers = new Headers({});
    let options = new RequestOptions({ headers: headers });

    THIS.API_SERVICE.addGame(body, options, function (err, res) {
      if (err) {
        console.log("ERROR!: ", err);
        THIS.commonService.showErrorAlert('ERROR!: ' + err.message);
        THIS.navCtrl.setRoot('ConfirmPackPage');
      } else {
        if (THIS.commonService.isSuccess(res.status)) {
          THIS.commonService.showSucessAlert('Game Added Successfully');
          THIS.navCtrl.setRoot('ConfirmPackPage');
        } else {
          THIS.commonService.showErrorAlert('Fail to Add New Game');
          THIS.navCtrl.setRoot('ConfirmPackPage');
        }
      }
    });
  }

}