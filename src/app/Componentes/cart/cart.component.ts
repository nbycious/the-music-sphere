import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
//import { Disco, Vinilos, Mercancia } from 'src/app/Clases/bd2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router : Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cart.reduce((sum, item) => sum + item.Precio, 0);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cart = [];
    this.total = 0;
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  pago() : void {
    this.router.navigate(['/pago']);
  }
}
