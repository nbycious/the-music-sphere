import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
  }

}
