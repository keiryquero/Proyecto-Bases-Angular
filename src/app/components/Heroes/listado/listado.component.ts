import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  constructor() { }

  heroes:string[] = ['Spiderman','Iroman', 'Hulk', 'Thor','Capitan America']
  heroeBorrado: string ='';
  active:boolean = false;

  borrar(){ 
    this.active = true;   
    this.heroeBorrado = this.heroes.shift() || '';
  
  }

}
