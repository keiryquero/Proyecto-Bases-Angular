import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService {

    private _personajes:Personaje[]=[
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
    
get personaje():Personaje[]{
    return [...this._personajes]
}
    constructor(){}

    agregarPersonaje(personaje:Personaje){
        this._personajes.push( personaje );
    }
    
}