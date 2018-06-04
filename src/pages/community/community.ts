import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {

  url:string;
  userData:string;
  coinData:string;
  id:number;
  
   



  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    
   
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmersionPage');
    this.loadJson()
    
  }
  loadJson(){
    this.http.get('https://randomuser.me/api/?results=10')
    .map(res => res.json())
    .subscribe(res => {
      this.userData = res.results;
      console.log(res.results);
    }, err =>{
      console.log(err);
    })
    
  } 
}
