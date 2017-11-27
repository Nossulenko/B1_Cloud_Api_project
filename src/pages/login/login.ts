import { Component,EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

import {Account} from '../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account = {} as Account;
  @Output()loginStatus: EventEmitter<any>;
  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private toast: ToastController) {
    this.loginStatus = new EventEmitter<any>();
  }
  login(event: LoginResponse){
    if(!event.error){
      this.toast.create({
        message: `Welcome to Online Academy, ${event.result.email}`,
        duration: 2000,
        position: 'top',
      }).present();
      this.navCtrl.setRoot('TabsPage');
    }
    else {
      this.toast.create({
        message: event.error.message,
        duration: 2000
      }).present();
    }
    console.log(event);

  }
  navigateToPage(pageName:string) {
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
