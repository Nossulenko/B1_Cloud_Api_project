import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ComponentsModule } from "../../components/components.module";
import { Profile } from '../../models/profile/profile.interface';
import { DataService } from "../../providers/data.service";
import {AuthService} from '../../providers/auth.service';
import { User } from "firebase/app";
import { NavController } from 'ionic-angular/navigation/nav-controller';
import {App} from 'ionic-angular';
@Component({
  selector: 'app-profile-form',
  templateUrl: 'profile-form.component.html'
})
export class ProfileFormComponent implements OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile;

  constructor(private auth: AuthService, private data: DataService,private navCtrl: NavController, private app: App) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=> {
      this.authenticatedUser = user
    })
  }
  signOut(){
    this.auth.signOut();
    this.app.getRootNav().setRoot('WelcomePage');
  }

  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      console.log(result);
    }
    
  }
ngOnDestroy(): void {
  this.authenticatedUser$.unsubscribe();
  }
}
