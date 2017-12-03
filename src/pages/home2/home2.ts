import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { NotesService } from '../../providers/notes.service';
import { Observable } from 'rxjs/Observable';
import { ToastService } from '../../providers/toast.service';
import firebase, { User } from 'firebase';
import { Note } from 'ionic-angular/components/note/note';

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html'
  
  
})
export class Home2Page {
  Notes$: Observable<Note[]>;
  constructor(public navCtrl: NavController, private toast: ToastService,private notesservice: NotesService) {
    this.Notes$ = this.notesservice.getNotes()//List of Notes
    .snapshotChanges() // Key and value 
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    )
    

  }
goToAdd(){
  this.navCtrl.push("AddNotePage");
}

}
