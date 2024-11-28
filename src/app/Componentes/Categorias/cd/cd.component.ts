import { Component, OnInit } from '@angular/core';
import { DiscoService } from './disco.service'; //Importa el servicio DiscoService
import { Disco } from 'src/app/Clases/bd2'; //importa la clase Disco que define la estructura de los datos


@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css']
})
export class CDComponent implements OnInit {
  discos: Disco[] = []; //inicializa el arreglo vacío de Discos

  //Inyectando el servicio en el cosntructor
  constructor(private discoService: DiscoService) { }

  //Metodo que se ejecuta cuando el componente se inicializa
  ngOnInit() {
    this.discoService.getDiscos().subscribe(discos => {
      this.discos = discos;
    });
  }


}
