import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {NotesService} from "../../services/notes.service";
import {DetailPage} from "../detail/detail";
import { IonicPage, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html'
  
  
})
export class Home2Page {
  notesRef: firebase.database.Reference = firebase.database().ref('/notes/');
  notes = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public notesService : NotesService ) {
    
  }
  // public goToDetail(id){
  //   this.navCtrl.push(DetailPage, {id:id})
  // }

  public createNote(){
    this.navCtrl.push(DetailPage, {id:0})
  }
  
  ionViewDidLoad() {
    this.getNotes();
  }

  public getNotes(): any{
  
     
     this.notesRef.on('value', notesList => {
       this.notes = [];
       notesList.forEach(note => {
         this.notes.push(note.val());
         return false;
       });
     });

    
     // console.log(this.notes);
     // if(this.notes =! undefined)
     // {
     // this.notes.filter((v) => {
     //   return v.User = this.userID;
     // });
     // }
   }

}
