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
  notes;

  user = firebase.auth().currentUser;
  userID;


  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public notesService : NotesService ) {
    
  }
  // public filterNotes(): any {
  //   this.notes.filter((item) => {
  //     item.User.indexOf(this.userID) > -1
  //   })
  // }

  public getNotes(): any{
    this.user = firebase.auth().currentUser;
    if (this.user) {
      this.userID = this.user.uid;
     }
    this.notesRef.on('value', notesList => {
      this.notes = [];
      notesList.forEach(note => {
        this.notes.push(note.val());
        return false;
      });
      console.log(this.notes);
      console.log(this.userID);
      this.notes= this.notes.filter(note => note.User === this.userID);
    });

    
  }



  // public goToDetail(id){
  //   this.navCtrl.push(DetailPage, {id:id})
  // }

  public createNote(){
    this.navCtrl.push(DetailPage, {id:0})
  }
  
  ionViewDidLoad() {
    this.getNotes();
    //this.filterNotes();
    
  }



}
