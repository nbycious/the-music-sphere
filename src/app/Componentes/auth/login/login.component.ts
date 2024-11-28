import { Component, OnInit } from '@angular/core';
import {Firestore, collection, collectionData, query, where } from'@angular/fire/firestore';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/bd2';//importamos la clase usuario declarada en el archivo bd2
import {from } from 'rxjs'
import Swal from 'sweetalert2';


@Component({ //decorador del componente
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario="";
  contrasena="";

  credencial = new Usuario(); //nueva instancia de la clase Usuario, debe ser impotada previamente


  UsuariosColeccion = collection(this.firestore, "Usuarios");// Variable que referencia a la colección "Usuarios" en Firestore

  constructor(private firestore : Firestore, private navegacion: Router) { //router es para el redireccionamiento a otros componentes


  }




  ngOnInit(): void {
    
  }

  logIn(){
    //la variable q contiene el query para la busqueda
   let q = query(this.UsuariosColeccion, where("Usuario", "==", this.usuario), where("Contrasena", "==", this.contrasena) )// validacion de que los datos del login sean los mismos que están en la base de datos
    collectionData(q).subscribe((usuarioSnap) => { // usuarioSnap es un array que contiene los documentos que coinciden con la consulta

      if(usuarioSnap.length!=0){
        Swal.fire("Acceso correcto, bienvenido.")
        // Llenar la instancia de credencial con los datos del primer documento encontrado
        this.credencial.setData(usuarioSnap[0])
         // Guardar en localStorage
         localStorage.setItem('usuario', JSON.stringify(this.credencial));
        this.navegacion.navigate([''],  { state: { user: this.credencial } });//nos redigirá al componente de inicio ya con los datos del login, cuyo path en el routing es ''
      }
      else{
        Swal.fire("No se encontraron usuarios con esas credenciales") //nos manda un mensaje error si los datos de inicio de sesión son incorrectos.
      }
    }
    
    
    
    ) 
   


  }

}
