import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Note} from './../models/note/note.interface';

@Injectable()

export class NotesService {

    constructor(private db: AngularFireDatabase)
    {

    }

    private notesRef = this.db.list<Note>('/notes/');

    getNotes () {
        return this.notesRef;
    }

    addNote(note: Note){
        return this.notesRef.push(note);
    }
    editNote(note: Note){
        return this.notesRef.update(note.key, note);
    }
    removeNote(note: Note) {
        return this.notesRef.remove(note.key);
    }

}