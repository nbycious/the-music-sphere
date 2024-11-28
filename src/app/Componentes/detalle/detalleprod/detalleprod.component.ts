import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscoService } from '../../Categorias/cd/disco.service';
import { Disco } from 'src/app/Clases/bd2';
import { CartService } from '../../cart/cart.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-detalleprod',
  templateUrl: './detalleprod.component.html',
  styleUrls: ['./detalleprod.component.css']
})
export class DetalleprodComponent implements OnInit {
  disco: Disco = new Disco();
  discoId: string | null = null;
  usuarioLogueado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private discoService: DiscoService,
    private cartService: CartService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.discoId = this.route.snapshot.paramMap.get('id');
    if (this.discoId) {
      this.discoService.getDiscoById(this.discoId).subscribe(data => {
        this.disco.setData(data);
      });
    }
    this.auth.isAuth().subscribe(logueado => {
      this.usuarioLogueado = logueado;
    })
  }

  addToCart(): void {
    if(this.usuarioLogueado){
      this.cartService.addToCart(this.disco);
    Swal.fire('Producto añadido al carrito');
    }
    else{
      Swal.fire('Por favor, inicia sesión para acceder al carrito');
      this.router.navigate(['/Login']);
    }
    
   
  }
}
