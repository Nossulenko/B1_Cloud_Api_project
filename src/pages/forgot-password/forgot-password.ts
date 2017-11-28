import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  recovery = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AngularFireAuth, private toast: ToastController) {
  }

  async forgotpassword(email:string)
  {
    var auth = firebase.auth();
    this.toast.create({
      message: "Wachtwoord reset mail succesvol verstuurd.",
      duration: 5000,
    }).present();
    try {
      auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
      this.toast.create({
        message: error.message,
        duration: 5000,
      }).present();
    }
    
    
    
  }
  navigateToPage(page:string){
    this.navCtrl.setRoot(page);
  }
  

}
