import { Http, Headers, HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map'


/**
 * Generated class for the ImmersionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-immersion',
  templateUrl: 'immersion.html',
  
})
export class ImmersionPage {

  url:string;
  data:string;
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmersionPage');
    this.loadUser();
  }
  loadUser(){

    this.http.get('https://randomuser.me/api/?results=50')
    .map(res => res.json())
    .subscribe(data => {
      this.data = data.results;
      console.log(data.results);
    }, err =>{
      console.log(err);
    })
  }

}
