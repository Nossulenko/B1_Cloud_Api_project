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


import { Home2Page } from '../pages/home2/home2';
import {DetailPage} from "../pages/detail/detail";



@NgModule({
  declarations: [
    MyApp,
    Home2Page,
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoPlayer,
    InAppBrowser,
    AuthService,
    DataService,
  ]
})
export class AppModule {}
