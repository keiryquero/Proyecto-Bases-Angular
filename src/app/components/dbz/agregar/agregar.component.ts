import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  @Input() nuevo:Personaje = {
    nombre:'',
    nombrePoder:"",
    poder : 0
   }

   /* @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter(); */
  constructor(private dbzServices:DbzService){}
  
  agregar(){
    if(this.nuevo.nombre.trim().length ===0){return;}  
   /*  this.onNuevoPersonaje.emit(this.nuevo);   */ 
   this.dbzServices.agregarPersonaje(this.nuevo);

      this.nuevo = {
       nombre:'',
       nombrePoder:'',
       poder:0
      }       
   
}
}
