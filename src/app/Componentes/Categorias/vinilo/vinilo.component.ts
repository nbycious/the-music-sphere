// src/app/vinilo/vinilo.component.ts
import { Component, OnInit } from '@angular/core';
import { ViniloService } from './vinilo.service';
import { Disco } from 'src/app/Clases/bd2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vinilo',
  templateUrl: './vinilo.component.html',
  styleUrls: ['./vinilo.component.css']
})
export class ViniloComponent implements OnInit {
  vinilos: Disco[] = [];

  constructor(private viniloService: ViniloService, private router: Router) { }

  ngOnInit(): void {
    this.viniloService.getVinilos().subscribe(data => {
      this.vinilos = data;
    });
  }
  verDetalles(viniloId: string): void {
    this.router.navigate(['/detalle-vinil', viniloId]);
  }
}


