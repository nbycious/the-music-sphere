import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/bd2';
import { Firestore, collection, collectionData, query, limit, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Disco, Mercancia, Vinilos } from 'src/app/Clases/bd2';
import { DiscoService } from '../Categorias/cd/disco.service';
import { MerchService } from '../Categorias/merch/merch.service';
import { ViniloService } from '../Categorias/vinilo/vinilo.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    //inicializar arreglos vacios de las categorías, para que se muiestre la pantalla de detalles al dar click
  discos: Disco[] = []; 
  merch: Mercancia[] = [];
  vinilos : Disco[] = [];

  credencial :any;

  cds$: Observable<any[]> | undefined;
  vinilos$: Observable<any[]> | undefined;
  merch$: Observable<any[]> | undefined;


  constructor(private firebase : Firestore, 
    private discoService : DiscoService,
    private merchService: MerchService, 
    private viniloService : ViniloService,
    private router : Router,
    private auth : AuthService) { 

      const navigation = history.state as { user?: Usuario };
      if(navigation.user){
        this.credencial = navigation.user;
      }
      else{
        const usuarioGuardado = localStorage.getItem('usuario');
          if(usuarioGuardado){
            this.credencial = JSON.parse(usuarioGuardado)
          }
      }
   
    console.log('Datos del usuario:', this.credencial); // Verifica los datos en la consola
  }

  

  ngOnInit(): void {
    this.auth.isAuth().subscribe(usuarioLogueado => {
      if(usuarioLogueado){
        this.credencial = JSON.parse(localStorage.getItem('usuario') || '{}');
      }
      else{
        this.credencial = null;
      }
    })

    this.cds$ = this.getCollectionData('CDs');
    this.vinilos$ = this.getCollectionData('Vinilos');
    this.merch$ = this.getCollectionData('Merch');

    //obtener la informacion del detalle de los discos, para mostrarse cuando se de click 
    this.discoService.getDiscos().subscribe(discos => {
      this.discos = discos;
    });

    //obtener la informacion del detalle de la merch
    this.merchService.getMerch().subscribe(data => {
      this.merch = data;
    });
    this.viniloService.getVinilos().subscribe(data => {
      this.vinilos = data;
    });

  }

  cargarDatosUsuario(){
    const user =localStorage.getItem('usuario');
    this.credencial = user ? JSON.parse (user) : null
  }
  viewDetails(viniloId: string): void {
    this.router.navigate(['/detalle-vinil', viniloId]);
  }
  private getCollectionData(collectionName: string): Observable<any[]> {
    const col = collection(this.firebase, collectionName);
    const q = query(col, limit(4)); // Limita a 4 productos por colección
    return collectionData(q, { idField: 'id' }).pipe(
      map(items => items.map(item => ({
        ...item, // ... copia todas las propiedades de item en el nuevo objeto
        id: item.id
      })))
    );
  }

}
