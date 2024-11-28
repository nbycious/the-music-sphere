import { Injectable } from '@angular/core';
import { Disco, Vinilos, Mercancia } from 'src/app/Clases/bd2';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = []; // acepta cualquier tipo de producto

  constructor() {
    this.loadCart();
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }

  addToCart(item: any): void {
    this.cart.push(item);
    this.saveCart();
  }

  getCart(): any[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  removeFromCart(item: any): void {
    // Comprueba que el elemento tenga el mismo identificador y tipo antes de eliminarlo
    const index = this.cart.findIndex(d => {
      if (d.DiscoId && item.DiscoId) {
        return d.DiscoId === item.DiscoId;
      } else if (d.MercanciaId && item.MercanciaId) {
        return d.MercanciaId === item.MercanciaId;
      } else if (d.ViniloId && item.ViniloId) {
        return d.ViniloId === item.ViniloId;
      }
      return false;
    });

    if (index !== -1) {
      this.cart.splice(index, 1); // splice remueve un elemento de un arreglo
      this.saveCart();
    }
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + this.convertToNumber(item.Precio), 0);
  }

  private convertToNumber(value: any): number {
    return typeof value === 'string' ? parseFloat(value) : value;
  }
}
