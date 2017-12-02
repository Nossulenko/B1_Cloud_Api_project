import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { NotesService } from '../../providers/notes.service';
import { Observable } from 'rxjs/Observable';
import { Item } from 'ionic-angular/components/item/item';
import { ToastService } from '../../providers/toast.service';

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html'
  
  
})
export class Home2Page {
  Notes$: Observable<Item[]>;

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
