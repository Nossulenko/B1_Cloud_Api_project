import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string;

  constructor(platform: Platform, private auth: AuthService) {

    this.auth.getAuthenticatedUser().subscribe(auth => {
      !auth ? this.rootPage = 'WelcomePage': this.rootPage = 'TabsPage';
    })


    platform.ready().then(() => {


    });
  }
}

