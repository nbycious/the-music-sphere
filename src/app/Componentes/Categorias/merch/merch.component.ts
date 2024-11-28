// src/app/merch/merch.component.ts
import { Component, OnInit } from '@angular/core';
import { MerchService } from './merch.service';
import { Mercancia } from 'src/app/Clases/bd2';  

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {
  merch: Mercancia[] = [];

  constructor(private merchService: MerchService) { }

  ngOnInit(): void {
    this.merchService.getMerch().subscribe(data => {
      this.merch = data;
    });
  }
}
