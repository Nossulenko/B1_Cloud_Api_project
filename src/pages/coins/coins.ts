import { Component, Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, Searchbar } from 'ionic-angular';
import { Http, Headers, HttpModule } from '@angular/http';
import { filter } from 'rxjs/operator/filter';
import { database } from 'firebase/app';





@IonicPage()
@Component({
  selector: 'page-coins',
  templateUrl: 'coins.html',
})
export class CoinsPage {
 

  coinData:string;
  url:string;
  items:any;
  
  

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {

   
  }
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinsPage');
    this.loadCoin()
    
  }
  loadCoin(){
    this.http.get('https://api.coinmarketcap.com/v2/ticker/?start=101&limit=10&sort=id&structure=array')
    .map(res => res.json())
    .subscribe(res => {
      this.coinData = res.data;
      this.coinData = res.data.filter(item => item.name);
      //console.log(res.data);
    }, err =>{
      console.log(err);
    })

  }
  initializeItems() {
    this.items = this.coinData;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  

}

