import {Injectable} from "@angular/core";

@Injectable()
export class NotesService{
  notes = [
    {id:1, title:'Titel 1', description: 'Beschrijving 1'},
    {id:2, title:'Titel 2', description: 'Beschrijving 2'},
    {id:3, title:'Titel 3', description: 'Beschrijving 3'}
  ];
  public getNotes(){
    return this.notes;
  }
  public getNote(id){
    return this.notes.filter(function (e, i) {return e.id == id})[0] || {id:null,title:null,description:null};
  }

  public createNote(note){
    this.notes.push(note)
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