import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {


  @Output() // Con esto permitimos conectarnois de nuestro main-page.component.html a que esté escuchando este onNewCharacter
  public onNewCharacter: EventEmitter<Character> = new EventEmitter// Le decimos que queremos emitir nuestro arreglo de Character, y luego creamos una instancia de nuestro Emisor de eventos EventEmitter

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void { // Queremos emitir esos valores que ingresemos en los inputs para reflejarlos en el objeto
    console.log(this.character);
    if( this.character.name.length === 0) return; // Le decimos que vamos a aceptar que el usuario nos mande el power 0 pero no el nombre vacío.

    this.onNewCharacter.emit(this.character); // Debemos emitir algo de tipo Character

    // Cuando enviemos esos valores del formulario, una vez enviamos queremos que los inputs se restablezcan a sus valores por defecto
    this.character = { name: '', power: 0 };
  }
}
