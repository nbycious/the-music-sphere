import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViniloService } from '../../Categorias/vinilo/vinilo.service';
import { Vinilos } from 'src/app/Clases/bd2';
import { CartService } from '../../cart/cart.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-detallevinil',
  templateUrl: './detallevinil.component.html',
  styleUrls: ['./detallevinil.component.css']
})
export class DetallevinilComponent implements OnInit {

    vinilo: Vinilos = new Vinilos();
    viniloId:  string | null = null;
    usuarioLogueado: boolean = false;

  constructor(private route: ActivatedRoute, 
    private viniloService: ViniloService,
    private cartService: CartService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.viniloId = this.route.snapshot.paramMap.get('id');
    if (this.viniloId) {
      this.viniloService.getViniloById(this.viniloId).subscribe(data => {
        this.vinilo.setData(data);
      });
    }

    this.auth.isAuth().subscribe(logueado => {
      this.usuarioLogueado = logueado;
    })
  }
  addToCart() {
    if (this.usuarioLogueado){
      this.cartService.addToCart(this.vinilo);
      Swal.fire('Producto añadido al carrito');
    }
    else{
      Swal.fire('Por favor, inicia sesión para acceder al carrito');
      this.router.navigate(['/Login']);
    }
      
    
  }
  }


