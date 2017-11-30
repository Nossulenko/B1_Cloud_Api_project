import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';
import { User } from "firebase/app";
import {App} from 'ionic-angular';
import {Profile} from '../../models/profile/profile.interface';
import { LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit{

  userProfile: Profile;
  loader: Loading;
  ngOnInit(): void {
    this.loader.present();
    
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
    this.data.getProfile(user)
    .valueChanges()
    .subscribe((profile: Profile) => {
    this.userProfile = <Profile>profile;
    this.loader.dismiss();
    })
    })
    }
  constructor(private data: DataService, private auth: AuthService, private app: App, private loading: LoadingController) {
    this.loader = this.loading.create({
      content: 'Profiel laden...'
    })
  }

  signOut(){
    this.auth.signOut();
    this.app.getRootNav().setRoot('WelcomePage');
  }

}
