import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent{

  personajes:Personaje[]=[
    {
      nombre:'Goku',
      nombrePoder: 'game game Jam',
      poder:14000
    },
    {
      nombre:'Vegueta',
      nombrePoder:'face blu',
      poder:7500
    }
  ]

nuevo:Personaje=
  {
    nombre:'',
    nombrePoder:'',
    poder:0
  }
  agregarNuevoPersonaje(event:Personaje){
    this.personajes.push(event)
  }

     

  

  

}
