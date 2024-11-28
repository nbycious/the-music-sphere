import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './Componentes/auth/login/login.component';
import { MainComponent } from './Componentes/main/main.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { CarruselComponent } from './Componentes/carrusel/carrusel.component';
import { ViniloComponent } from './Componentes/Categorias/vinilo/vinilo.component';
import { MerchComponent } from './Componentes/Categorias/merch/merch.component';
import { CartComponent } from './Componentes/cart/cart.component';
import { CDComponent } from './Componentes/Categorias/cd/cd.component';

//BD
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DiscoService } from './Componentes/Categorias/cd/disco.service';
import { CartService } from './Componentes/cart/cart.service';

import { DetalleprodComponent } from './Componentes/detalle/detalleprod/detalleprod.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { MerchService } from './Componentes/Categorias/merch/merch.service';
import { DetallevinilComponent } from './Componentes/detalle/detallevinil/detallevinil.component';
import { DetallemerchComponent } from './Componentes/detalle/detallemerch/detallemerch.component';
import { AuthService } from './Componentes/auth/auth.service';

import { PagoComponent } from './Componentes/cart/pago/pago.component';

import { RegisterComponent } from './Componentes/auth/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavBarComponent,
    CarruselComponent,
    CDComponent,
    ViniloComponent,
    MerchComponent,
    CartComponent,
    FooterComponent,
    DetallevinilComponent,
    DetallemerchComponent,
    DetalleprodComponent,
   
    PagoComponent,
  
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,

    
    

  ],

  

  providers: [DiscoService, MerchService, CartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
