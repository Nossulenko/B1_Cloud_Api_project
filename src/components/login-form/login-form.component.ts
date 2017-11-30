import { Component, EventEmitter, Output} from '@angular/core';
import {NavController, ToastController} from "ionic-angular";
import { LoginResponse } from "../../models/login/login-response.interface";
import {Account} from "../../models/account/account.interface";
import { AuthService } from "../../providers/auth.service";
import firebase from 'firebase';
@Component({
  selector: 'app-login-form>',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {
  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthService, private navCtrl: NavController, private toast: ToastController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }
     navigateToPage(pageName:string) {
    this.navCtrl.push(pageName);
  }
  async login(){
      const loginResponse = await this.auth.SignInWithEmailAndPassword(this.account)
      this.loginStatus.emit(loginResponse);


  }

}
