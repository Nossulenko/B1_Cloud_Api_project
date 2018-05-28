import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {
  coinData:any;
  constructor(public http: Http) {
    console.log('Hello RestServiceProvider Provider');
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