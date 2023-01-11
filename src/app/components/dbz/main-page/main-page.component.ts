import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent{ 

nuevo:Personaje = {
    nombre:'Dios',
    nombrePoder:'Face Dios',
    poder:50000
  }  

}
