import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from 'ionic-angular/components/note/note';
import { NotesService } from '../../providers/notes.service';
import { ToastService } from '../../providers/toast.service';


@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {
  note: Note
  constructor(public navCtrl: NavController, private toast: ToastService, public navParams: NavParams, private notesservice: NotesService) {
    this.note = this.navParams.get('note');
  }

  ionViewDidLoad() {
   
  }
  saveNote(note: Note){
this.notesservice.editNote(note).then(() => {
  this.toast.show(`${note.title} is opgeslagen`);
  this.navCtrl.setRoot('Home2Page');
})

  }

  removeNote(note: Note) {
    this.notesservice.removeNote(note).then(()=> {
      this.toast.show(`${note.title} verwijderd`);
      this.navCtrl.setRoot('Home2Page');
    })
  }

}
