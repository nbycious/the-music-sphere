import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/auth/login/login.component';
import { MainComponent } from './Componentes/main/main.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { CarruselComponent } from './Componentes/carrusel/carrusel.component';
import { CDComponent } from './Componentes/Categorias/cd/cd.component';
import { ViniloComponent } from './Componentes/Categorias/vinilo/vinilo.component';
import { MerchComponent } from './Componentes/Categorias/merch/merch.component';
import { CartComponent } from './Componentes/cart/cart.component';
import { DetalleprodComponent } from './Componentes/detalle/detalleprod/detalleprod.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { DetallevinilComponent } from './Componentes/detalle/detallevinil/detallevinil.component';
import { DetallemerchComponent } from './Componentes/detalle/detallemerch/detallemerch.component';

import { PagoComponent } from './Componentes/cart/pago/pago.component';
import { RegisterComponent } from './Componentes/auth/register/register.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'CD', component: CDComponent},
  {path: 'Vin', component: ViniloComponent},
  {path: 'Merch', component: MerchComponent},
  {path: 'cart', component: CartComponent},
  {path: 'detalle', component: DetalleprodComponent},
  { path: 'detalle/:id', component: DetalleprodComponent },
  {path: 'dvinil', component: DetallevinilComponent},
  { path: 'detalle-vinil/:id', component: DetallevinilComponent }, 
  { path: 'vinilo/:id', component: ViniloComponent },
  { path: 'merch', component: MerchComponent },
  { path: 'detallemerch/:id', component: DetallemerchComponent },
  {path: 'pago', component: PagoComponent},
 



  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
