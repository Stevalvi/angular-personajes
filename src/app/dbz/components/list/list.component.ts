import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() // Con esto podemos permitir comunicarnos con el componente padre, le estamos diciendo que nuestro ListComponent puede recibir una property llamada characterList
  public characterList: Character[] = [{ // Le decimos que va a ser de tipo Character, recordemos que las interfaces las vimos en typescript
    name: 'Trunks',
    power: 10
  }];

  // onDelete = Index value : number
  @Output() // Aseguremonos de importar el output de angular
  public onDelete: EventEmitter<string> = new EventEmitter(); // Le decimos que ese EventEmitter va a emitir un number

  onDeleteCharacter(id?: string):void { // Hacemos el id opcional
    // TODO: Emitir el ID del personaje
    if ( !id ) return; // Si el id no existe que nunca lo mande a llamar, básicamente si no tenemos un id no hace nada.

    console.log({ id })

    this.onDelete.emit( id ); // Vamos a emitir el índice
  }
}
