import {Injectable} from "@angular/core";
import firebase from 'firebase';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class NotesService{
  user;
  userID;
  notes = [];
  constructor(public afdb: AngularFireDatabase) {
  }
  notesRef: firebase.database.Reference = firebase.database().ref('/notes/');
  // notes = [
  //   {id:1, title:'Titel 1', description: 'Beschrijving 1'},
  //   {id:2, title:'Titel 2', description: 'Beschrijving 2'},
  //   {id:3, title:'Titel 3', description: 'Beschrijving 3'}
  // ];

  //Get current user


  public getNotes(): any{
   //ToDO: //Get all notes associated with this.userID

    //return this.notes;
 
    
    this.notesRef.on('value', notesList => {
      this.notes = [];
      notesList.forEach(note => {
        this.notes.push(note.val());
        return true;
      });
      return this.notes;
    });

    // console.log(this.notes);
    // if(this.notes =! undefined)
    // {
    // this.notes.filter((v) => {
    //   return v.User = this.userID;
    // });
    // }
  }
  public getNote(id){
    return this.notes.filter(function (e, i) {return e.id == id})[0] || {id:null,title:null,description:null};
  }

  public createNote(note){
    this.user = firebase.auth().currentUser;
    if (this.user) {
      this.userID = this.user.uid;
    }
    this.notesRef.push({
      Note: note,
      User: this.userID,
      })
  }

  public editNote(note){
    for (let i = 0; i < this.notes.length; i++){
      if (this.notes[i].id == note.id){
        this.notes[i] = note;
      }
    }
  }

  public deleteNote(note){
    for (let i = 0; i < this.notes.length; i++){
      if (this.notes[i].id == note.id){
        this.notes.splice(i,1);
      }
    }
  }
}