import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Note} from './../models/note/note.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from "firebase";

@Injectable()

export class NotesService {
    public userId;
    public notesRef;
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth)
    {
                this.getUserId();
                this.notesRef = this.db.list<Note>(`/notes/${this.userId}`);
                console.log("inside constructor: " + this.userId);

    }
    getUserId () {
        this.userId = firebase.auth().currentUser.uid;
    }

    getNotes () {
        this.getUserId();
        this.notesRef = this.db.list<Note>(`/notes/${this.userId}`);
        return this.notesRef;
    }

    addNote(note: Note){
        this.getUserId();
        this.notesRef = this.db.list<Note>(`/notes/${this.userId}`);
        return this.notesRef.push(note);
    }
    editNote(note: Note){
        this.getUserId();
        this.notesRef = this.db.list<Note>(`/notes/${this.userId}`);
        return this.notesRef.update(note.key, note);
    }
    removeNote(note: Note) {
        this.getUserId();
        this.notesRef = this.db.list<Note>(`/notes/${this.userId}`);
        return this.notesRef.remove(note.key);
    }

}