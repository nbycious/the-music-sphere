import { Injectable } from '@angular/core';//injectable define el servicio
import { Firestore, collectionData, collection, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';  // importa Observable para manejar flujos de datos reactivo
import { Disco } from 'src/app/Clases/bd2';// importa la clase Disco que define la estructura de un disco

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  constructor(private firestore: Firestore) {}

  getDiscos(): Observable<Disco[]> { //recibe un id de tipo de string 
    const discosCollection = collection(this.firestore, 'CDs');
    return collectionData(discosCollection, { idField: 'DiscoId' }) as Observable<Disco[]>; //clase de ReactiveX parae trabajar con cambios instantaneos en la base
  }

  getDiscoById(id: string): Observable<Disco> {
    const discoDoc = doc(this.firestore, `CDs/${id}`);//$ (el pejecoin) construye una cadena de texto que representa la ruta del documento en firestore.
    return docData(discoDoc, { idField: 'DiscoId' }) as Observable<Disco>;
  }
  
}

