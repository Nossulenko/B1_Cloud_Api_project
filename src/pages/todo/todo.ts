import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, HttpModule } from '@angular/http';
/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  url:string;
  todoData:string;

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
    this.loadTodos()
  }

  loadTodos(){
    this.http.get('')
    .map(res => res.json())
    .subscribe(res => {
      this.todoData = res.data;
      //this.initializeItems();
      
      //console.log(res.data);
    }, err =>{
      console.log(err);
    })
  }
  initializeItems() {
    this.items = this.todoData;
  }

  getTodos(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.todoData = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
