import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logueado = new BehaviorSubject<boolean>(false);//loggedIn

  constructor(private router : Router) {
    const user = localStorage.getItem('usuario');
    this.logueado.next(!!user); //doble negacion booleana
  }

  isAuth() {
    return this.logueado.asObservable();
  }

  login(user: any) {
    localStorage.setItem('usuario', JSON.stringify(user));
    this.logueado.next(true);
    this.router.navigate([''], { state: { user }})
  }

  logout() {
    localStorage.removeItem('usuario');
    Swal.fire("Sesión cerrada con éxito.")
    this.logueado.next(false);
  }
}
