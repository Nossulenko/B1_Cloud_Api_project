import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {NotesService} from "../../services/notes.service";
import {DetailPage} from "../detail/detail";
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html'
  
  
})
export class Home2Page {
  notes = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public notesService : NotesService ) {
    this.notes = notesService.getNotes();
  }
  public goToDetail(id){
    this.navCtrl.push(DetailPage, {id:id})
  }

  public createNote(){
    this.navCtrl.push(DetailPage, {id:0})
  }

}
