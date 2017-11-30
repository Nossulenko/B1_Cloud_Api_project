import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/login/login-response.interface";
import {Subscription} from 'rxjs/Subscription';
import { DataService } from '../../providers/data.service';
import {  User } from 'firebase';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  account = {} as Account
  profile$: Subscription;
  constructor(private toast: ToastController, private data: DataService, public navCtrl: NavController) {
  }
  register(event){
    if(!event.error) {
      this.toast.create({
        message: `Account created: ${event.result.email}`,
        duration: 2000,
        position: 'top'
      }).present();

      this.profile$ = this.data.getProfile(<User>event.result)
      .snapshotChanges() // return an Observable
      .subscribe(action => {
        console.log(action.payload.val());
        action.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('ProfilePage');
      });
    }
    else {
      this.toast.create({
        message: `Account not created. ${event.error.message}`,
        duration: 2000,
        position: 'top'
      }).present();
    }
  }


}
