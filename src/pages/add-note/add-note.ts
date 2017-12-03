import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Note} from '../../models/note/note.interface';
import { NotesService } from '../../providers/notes.service';
import { ToastService } from '../../providers/toast.service';
@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  note: Note = {
    title: "",
    description: "",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private notesservice: NotesService, private toast: ToastService) {
  }
  addNote(note: Note){
    this.notesservice.addNote(note).then(ref => {
      this.toast.show(`${note.title} toegevoegd`)
      this.navCtrl.setRoot('Home2Page');
    })
  }

}
