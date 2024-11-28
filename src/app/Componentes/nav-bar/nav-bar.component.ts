import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2';
//normalmente vacio
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuarioLogueado: boolean = false; //determina si el usuario esta logueado o no 
  termBusq: string ="";

  constructor(private router : Router, private refresh: ChangeDetectorRef, private auth : AuthService) { }

  ngOnInit(): void {
    this.auth.isAuth().subscribe(logueado => {
      this.usuarioLogueado = logueado;
    })
    
  }

  cerrarSesion() : void{
    this.auth.logout()
    this.router.navigate([''])
  }
  irAlCarrito(): void {
    if (this.usuarioLogueado) {
      this.router.navigate(['/cart']);
    } else {
      
      Swal.fire('Por favor, inicia sesión para acceder al carrito');
      this.router.navigate(['/Login']);
    }
  }
  buscar() : void{
   if(this.termBusq.trim()){ //trim elimina los espacios innecesarios de la cadena
    this.router.navigate(["/search"], {queryParams: { q: this.termBusq}});
   }
  }
  
}
