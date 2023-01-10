import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.scss']
})
export class AcumuladorComponent implements OnInit {

  title:string = 'contador - app';
  base:  number = 5;
  numero:number = 5;
 

  constructor() { }

  ngOnInit(): void {
  }

  acumulador(valor:number){
 this.numero += valor;     
  }
}
