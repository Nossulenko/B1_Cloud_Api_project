import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AngularFireDatabase } from "angularfire2/database";
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase, private soc: SocialSharing) {
  }

  navigateToPage(pageName:string) {
    this.navCtrl.push(pageName);
  }

  ionViewDidLoad() {
    this.QuotesRef.on('value' , quoteSnapshot => {
      this.Quotes = [];
     quoteSnapshot.forEach(quoteSnap => {
      this.Quotes.push(quoteSnap.val());
           return false;
     });
    });
  
   
  }

  share (quote: string, auteur: string){
    //this.soc.shareViaTwitter(quote + 'gechreven door:' + auteur,'assets/img/BoomB.png', null);
    this.soc.share(quote, auteur, 'assets/img/BoomB.png', null);
  }


}
