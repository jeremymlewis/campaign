import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subscription, startWith } from 'rxjs';

export class Document {
  id: string;
  gameState: string;
}

@Injectable({
  providedIn: 'root'
})
export class MultiPlayerService {
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  document: Document;
  private _docSub: Subscription;
  currentDoc: string;
  addGuestId = false;

  gameLinked = false;
  hostId = "";
  guestId = "";


  private _docSubList: Subscription;
  constructor(private socket: Socket) { }


  ngOnInit() {
    //Create a clientId you can sign changes with.

    this._docSubList = this.currentDocument.subscribe(doc => this.currentDoc = doc.id);

    this._docSub = this.currentDocument.pipe(
      startWith({ id: '', gameState: '{game}' })
    ).subscribe(document => {
      // this.hostId = document.hostId;
      // this.guestId = document.guestId;
      this.document = document;
      this.checkReady();
    });
  }

  ngOnDestroy() {
    console.log("We destroyed the Multiplayer store?")
    this._docSubList.unsubscribe();
    this._docSub.unsubscribe();
  }

  checkReady() {
    if (this.document) {
      let data: any = JSON.parse(this.document?.gameState);
      console.log(data)
      if (this.addGuestId) {
        this.guestId = this.docId();
        data.guestId = this.guestId;
        //this.document.guestId = this.guestId;
        this.socket.emit('editDoc', JSON.stringify(data));
        this.addGuestId = false;
      }

      if (data.hostId && data.guestId) {
        this.gameLinked = true;
      }
    }

  }

  editDoc() {
    this.editDocument(this.document);
  }

  join(joinCode: string) {
    if (joinCode.length == 4) {
      this.loadDoc(joinCode);
    }
  }

  loadDoc(id: string) {
    this.getDocument(id);
  }

  newDoc() {
    this.newDocument();
  }



  //mark these private
  getDocument(id: string) {
    this.socket.emit('getDoc', id);
    this.addGuestId = true;
    this.checkReady();
  }

  newDocument() {
    let newID = this.docId();
    this.hostId = this.docId();
    this.socket.emit('addDoc', { id: newID, gameState: '{}'});
    this.currentDoc = newID;
  }

  editDocument(document: Document) {
    if (!document) {
      document = {id: "abc", gameState: "{}" }
    }
    this.socket.emit('editDoc', document);
  }

  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < 4; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
