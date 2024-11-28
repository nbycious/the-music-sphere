import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchService } from '../../Categorias/merch/merch.service';
import { Mercancia } from 'src/app/Clases/bd2';
import { CartService } from '../../cart/cart.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-detallemerch',
  templateUrl: './detallemerch.component.html',
  styleUrls: ['./detallemerch.component.css']
})
export class DetallemerchComponent implements OnInit {
  mercancia$: Observable<Mercancia> | undefined;
  usuarioLogueado: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private merchService: MerchService,
    private cartService : CartService,
    private router : Router,
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mercancia$ = this.merchService.getMercanciaById(id);
    }
    this.auth.isAuth().subscribe(logueado => {
      this.usuarioLogueado = logueado;
    })
  }

  addToCart(mercancia: Mercancia): void {

    if (this.usuarioLogueado) {
      this.cartService.addToCart(mercancia);
    Swal.fire('Producto añadido al carrito');
    } else {
      
      Swal.fire('Por favor, inicia sesión para acceder al carrito');
      this.router.navigate(['/Login']);
    }

    
     
  }
}
