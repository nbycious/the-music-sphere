import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  pagoForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,private cartService :  CartService) { 
    this.pagoForm = this.fb.group({
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required],
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  pagaryEnviar() : void{
    if(this.pagoForm.valid){
      this.router.navigate(['/']);
      Swal.fire("Producto pagado con éxito.")
      this.cartService.clearCart();
    }
    else{
      Swal.fire("Por favor, completa todos los campos requeridos.");
    }
    
  }

}
