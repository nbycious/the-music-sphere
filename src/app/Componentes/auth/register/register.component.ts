import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Usuario } from 'src/app/Clases/bd2'; // Importa la clase Usuario
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nuevoUsuario = new Usuario(); // Instancia de la clase Usuario
  contrasenaConfirmacion = "";
  UsuariosColeccion = collection(this.firestore, "Usuarios"); // Referencia a la colección "Usuarios" en Firestore


  constructor(private firestore : Firestore,  private navegacion: Router) { }

  ngOnInit(): void {
  }

  registrarUsuario() {
    if (this.nuevoUsuario.Contrasena !== this.contrasenaConfirmacion) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
     
    }

    addDoc(this.UsuariosColeccion, {
      Nombre: this.nuevoUsuario.Nombre,
      Usuario: this.nuevoUsuario.Usuario,
      Contrasena: this.nuevoUsuario.Contrasena,
     
    }).then(() => {
      Swal.fire("Registro exitoso", "Usuario registrado correctamente", "success");
      this.navegacion.navigate(['Login']); 
    }).catch(error => {
      Swal.fire("Error", "Hubo un problema al registrar el usuario: " + error.message, "error");
    });
  }
}

