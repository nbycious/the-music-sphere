import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Disco } from 'src/app/Clases/bd2';

@Injectable({
  providedIn: 'root'
})
export class ViniloService {

  constructor(private firestore: Firestore) { }

  getVinilos(): Observable<Disco[]> {
    const vinilosCollection = collection(this.firestore, 'Vinilos');
    return collectionData(vinilosCollection, { idField: 'id' }).pipe(
      map(data => data.map(item => {
        const disco = new Disco();
        disco.setData(item);
        return disco;
      }))
    ) as Observable<Disco[]>;
  }

  getViniloById(id: string): Observable<Disco> {
    const viniloDoc = doc(this.firestore, `Vinilos/${id}`);
    return docData(viniloDoc, { idField: 'id' }).pipe(
      map(data => {
        const disco = new Disco();
        disco.setData(data);
        return disco;
      })
    ) as Observable<Disco>;
  }
}
