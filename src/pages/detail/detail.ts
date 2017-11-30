import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotesService} from "../../services/notes.service";
import firebase from 'firebase';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  notesRef: firebase.database.Reference;
  note = {id:null,title:null,description:null};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService : NotesService) {

    this.id = this.navParams.get('id');
    console.log(this.id);
   this.notesRef = firebase.database().ref('/notes/Note/'+this.id);
  this.notesRef.on('value', function(snapshot){
     console.log(snapshot.val());
   })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addNote(){
    if (this.id != 0){
      //Editando
      this.notesService.editNote(this.note);
      alert('Notitie bijgewerkt!');
    }else{
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
      alert('Notitie toegevoegd!');
    }
    this.navCtrl.pop();
  }

  deleteNote(){
    this.notesService.deleteNote(this.note);
    alert('Notitie verwijderd!');
    this.navCtrl.pop();
  }

}
