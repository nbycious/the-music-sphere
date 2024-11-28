import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mercancia } from 'src/app/Clases/bd2';
import { doc, docData } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class MerchService {

  constructor(private firestore: Firestore) { }

  getMerch(): Observable<Mercancia[]> {
    const merchCollection = collection(this.firestore, 'Merch');
    return collectionData(merchCollection, { idField: 'MercanciaId' }) as Observable<Mercancia[]>;
  }

  getMercanciaById(id: string): Observable<Mercancia> {
    const docRef = doc(this.firestore, `Merch/${id}`);
    return docData(docRef, { idField: 'MercanciaId' }) as Observable<Mercancia>;
  }
}

