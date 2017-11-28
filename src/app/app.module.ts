import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2'
import {FIREBASE_CONFIG} from './app.firebase.config';
import { VideoPlayer } from '@ionic-native/video-player';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { DataService } from '../providers/data.service';
import { AngularFireDatabaseModule } from "angularfire2/database";
import {NotesService} from "../services/notes.service";
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { DetailPage } from '../pages/detail/detail';
import {SocialSharing} from '@ionic-native/social-sharing'

@NgModule({
  declarations: [
    MyApp,
    DetailPage
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoPlayer,
    InAppBrowser,
    AuthService,
    DataService,
    NotesService,
    FormsModule,
    SocialSharing,
    
  ]
})
export class AppModule {}
