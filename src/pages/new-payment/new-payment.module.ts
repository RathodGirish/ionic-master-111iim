import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPaymentPage } from './new-payment';
import { HttpModule } from '@angular/http';

/*
TODO : To Add New Game Module.
Method : AddGameModule
*/
@NgModule({
  declarations: [
    NewPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPaymentPage),
    HttpModule
  ],
  exports: [
    NewPaymentPage
  ]
})
export class NewPaymentModule {}
