import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AngularFireDatabase } from "angularfire2/database";
import { LoadingController, Loading } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-show-quotes',
  templateUrl: 'show-quotes.html',
})
export class ShowQuotesPage {
  //Reference to firebase quotes
  QuotesRef: firebase.database.Reference = firebase.database().ref('/quotes/');
  //Array to hold quotes
  Quotes : Array<any> = [];
  loader: Loading;
  constructor(public af: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase, private soc: SocialSharing, private loading: LoadingController) {
  this.loader = this.loading.create({
    content: 'Quotes laden...'
  })
  }

  navigateToPage(pageName:string) {
    this.navCtrl.push(pageName);
  }

  ionViewWillLoad() {
    this.loader.present();
    this.QuotesRef.on('value' , quoteSnapshot => {
      this.Quotes = [];
     quoteSnapshot.forEach(quoteSnap => {
      this.Quotes.push(quoteSnap.val());
           return false;
     });
    });
    this.loader.dismiss();
  }

  share (quote: string, auteur: string){
    //this.soc.shareViaTwitter(quote + 'gechreven door:' + auteur,'assets/img/BoomB.png', null);
    this.soc.share(quote, "Quote van Online Academy geschreven door: " + auteur, "assets/imgs/boomB.png", null);
  }


}
