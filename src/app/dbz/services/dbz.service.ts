
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface'; // En nuestro servicio vamos a agregar todo lo que es la lógica de nuestro código.

@Injectable({
  providedIn: 'root'
})
export class DbzService { // Un service es el lugar correcto para mantener nuestra información, es decir, la data o el estado, que se va generando cuando las persoans estén usando nuestra aplicación.

  public characters: Character[] = [{ // Le decimos que va a ser de tipo Character, recordemos que las interfaces las vimos en typescript

    // Cuando emitamos el nuevo personaje que viene desde el formulario vamos a insertarlo acá en el arreglo
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Gokú',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  // Agregar nuevo elemento
  addCharacter(character: Character):void { // Esto es lo que vamos a hacer cuando haya un nuevo personaje

    const newCharacter: Character = {id: uuid(), ...character} // Con el spread operator de character le decimos, toma todas esas propiedades de character y experselas en este nuevo objeto que estamos creando: {id: uuid(), ...character. Hay que tener en cuenta que primero debe ir el ...character y después el elemento que queremos sobreescribir, pero en este caso lo dejamos así ya que el id es opcional ?

    this.characters.push(newCharacter); // Añade el nuevo elemento que agreguemos al final del arreglo e insertamos el personaje
  }

  // Eliminar un elemento
  deleteCharacterById( id: string) {
    this.characters = this.characters.filter( character => character.id !== id ) // Filter va a crea run nuevo arreglo con los ids que no seleccionemos, y el id seleccionado lo va a eliminar
  }
}
