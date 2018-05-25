import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, HttpModule } from '@angular/http';
/**
 * Generated class for the CoinsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coins',
  templateUrl: 'coins.html',
})
export class CoinsPage {

  coinData:string;
  url:string;


  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinsPage');
    this.loadCoin()
  }
  loadCoin(){
    this.http.get('https://api.coinmarketcap.com/v2/listings/')
    .map(res => res.json())
    .subscribe(res => {
      this.coinData = res.data;
      //console.log(res.data);
    }, err =>{
      console.log(err);
    })

  }

}

